import React, {useEffect, useRef, useState} from "react"
import css from './PockemonModal.module.css'
import {getFullPockemonInfo} from "../../core/Api";
import {PockemonFullInfo} from "../../core/types";
import {DefaultModal} from "../defaultModal/DefaultModal";

interface IPockemonModal {
    closeModal: () => void,
    pockemonId: number
}

export const PockemonModal: React.FC<IPockemonModal> = ({closeModal, pockemonId}) => {
    const [pockemonInfo, setPockemonInfo] = useState<PockemonFullInfo>()

    useEffect(() => {
        getFullPockemonInfo(pockemonId, setPockemonInfo)
    }, [pockemonId])

    return (
        <DefaultModal modalName={pockemonInfo?.name} closeModal={closeModal}>
            <div>
                <div className='modalText'>Характеристики:</div>
                {pockemonInfo?.stats.map(stats => (
                    <div className='modalText'>
                        {`${stats.stat.name}: ${stats.base_stat}`}
                    </div>
                ))}
            </div>
            <div className={css.block}></div>
            <div>
                <div className='modalText'>Способности:</div>
                {pockemonInfo?.abilities.map(ability => (
                    <div className='modalText'>
                        {`${ability.ability.name}`}
                    </div>
                ))}
            </div>
            <div className={css.block}></div>
            <div className={css.modalPhoto}>
                <img src={pockemonInfo?.sprites.other.home.front_default} alt="" className={css.imgWidth}/>
            </div>
        </DefaultModal>
    )
}