import React from "react"
import css from './Footer.module.css'
import {behanceLoge, facebookLogo, googleLogo, instagramLogo, pinterestLogo, twitterLogo} from "../../image";

export const Footer = () => {
    return (
        <div className='display-flex direction-column align-center'>
            <div className={`${css.footerCompanyName} font-serif m-b-60`}>Pockemon</div>
            <div className={`${css.footerMenu} m-b-30`}>
                <ul className={`${css.footerMenuText} menu font-sans display-flex justify-between font-sans`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Recipes</a></li>
                    <li><a href="#">Article</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Purchase</a></li>
                </ul>
            </div>
            <div className={`${css.footerMedia} display-flex justify-between m-b-40`}>
                <button className={`${css.circleBtn} display-flex align-center justify-center`}>
                    <img src={facebookLogo} alt="" className={css.logoWidth}/>
                </button>
                <button className={`${css.circleBtn} display-flex align-center justify-center`}>
                    <img src={twitterLogo} alt="" className={css.logoWidth}/>
                </button>
                <button className={`${css.circleBtn} display-flex align-center justify-center`}>
                    <img src={pinterestLogo} alt="" className={css.logoWidth}/>
                </button>
                <button className={`${css.circleBtn} display-flex align-center justify-center`}>
                    <img src={googleLogo} alt="" className={css.logoWidth}/>
                </button>
                <button className={`${css.circleBtn} display-flex align-center justify-center`}>
                    <img src={behanceLoge} alt="" className={css.logoWidth}/>
                </button>
                <button className={`${css.circleBtn} display-flex align-center justify-center`}>
                    <img src={instagramLogo} alt="" className={css.logoWidth}/>
                </button>
            </div>
            <div className={`${css.footerSignature} font-sans display-flex align-center justify-center`}>@2019 Logwork. All Right
                Reserved.
            </div>
        </div>
    )
}