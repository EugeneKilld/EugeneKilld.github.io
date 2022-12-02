import React, {useEffect, useState} from "react"
import {DefaultModal} from "../defaultModal/DefaultModal"
import {getAllPockemons, getFullPockemonInfo, getFullPockemonInfoByURL, getPockemonsInfo} from "../../core/Api/Pockemon"
import {PockemonFullInfo, PockemonInfo, PockemonsPack} from "../../core/types"
import css from './PockemonsListModal.module.css'

interface IPockemonsListModal {
    closeModal: () => void
}

export const PockemonsListModal: React.FC<IPockemonsListModal> = ({closeModal}) => {
    const [pockemonsList, setPockemonsList] = useState<PockemonsPack[]>([])
    const [pockemonName, setPockemonName] = useState('bulbasaur')
    const [pockemonFullInfo, setPockemonFullInfo] = useState<PockemonFullInfo>()

    useEffect(() => {
        getAllPockemons(setPockemonsList)
    })

    const pockemonSearch = (name: string) => {
        const pockemon = pockemonsList.find(pockemon => pockemon.name === pockemonName) as PockemonsPack
        getFullPockemonInfoByURL(pockemon.url, setPockemonFullInfo)
    }

    return (
        <DefaultModal modalName={'Покемоны'} closeModal={closeModal}>
            <div>
                {pockemonsList.map((pockemon, i) => (
                    <div className='display-flex justify-between' key={pockemon.name}>
                        <div className={`${css.text} modalText`}>{`${i+1}. ${pockemon.name}`}</div>
                    </div>
                ))}
            </div>
            <div className={css.searchBox}>
                <div className="display-flex justify-center">
                    <input value={pockemonName} onChange={e => setPockemonName(e.target.value)} className={css.inputStyle}/>
                    <button onClick={() => pockemonSearch(pockemonName)} className='btn'>искать</button>
                </div>
                <div>
                    {pockemonFullInfo &&
                        <div className="display-flex direction-column align-center justify-center">
                        <img
                            src={pockemonFullInfo?.sprites.other['official-artwork'].front_default}
                            className={css.imgWidth}
                        />
                        <div className={css.text}>{`Привет. Меня зовут ${pockemonFullInfo?.name}`}</div>
                        <div className={css.text}>{`Я владею следующими способностями:`}</div>
                        <div className='display-flex'>
                            {pockemonFullInfo?.abilities.map((ability, i) => (
                                <div className={css.text}>{`${i+1}. ${ability.ability.name}`}</div>
                            ))}
                        </div>
                        <div className={css.text}>И у меня вот такие базовые характеристики:</div>
                        <div className='display-flex wrap justify-center'>
                            {pockemonFullInfo?.stats.map(stats => (
                                <div className={`${css.text} modalText`}>
                                    {`${stats.stat.name}: ${stats.base_stat};`}
                                </div>
                            ))}
                        </div>
                    </div>
                    }
                </div>
            </div>
        </DefaultModal>
    )
}