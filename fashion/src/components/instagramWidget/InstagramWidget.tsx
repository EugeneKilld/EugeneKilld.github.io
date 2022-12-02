import React, {useEffect, useState} from "react"
import css from './InstagramWidget.module.css'
import {womanImg1, womanImg2, womanImg3, womanImg4, womanImg5, womanImg6} from "../../image";
import {PockemonInfo, PockemonsPack} from "../../core/types";
import {useAppSelector} from "../../core/hooks/hooks";
import {getPockemonsInfo} from "../../core/Api";
import {usePockemonInfo} from "../../core/hooks/usePockemonInfo";

export const InstagramWidget = () => {
    const pockemonInfo = usePockemonInfo(500, 505)

    return (
        <div className='display-flex direction-column justify-between'>
            <div className={`${css.instaName} font-serif display-flex justify-center`}>
                Follow our
                <a href="">@instagram_name</a>
            </div>
            <div className={`${css.photoHeight} display-flex align-center`}>
                {
                    pockemonInfo.map(pockemon => (
                        <img src={pockemon.photoURL} className={`${css.photo} m-r-20`}/>
                    ))
                }
            </div>
        </div>
    )
}