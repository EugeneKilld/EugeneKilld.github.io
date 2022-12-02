import React, {useEffect, useState} from "react"
import css from './RibonPanel.module.css'
import {
    behanceLoge,
    dribbleLogo,
    facebookLogo, googleLogo, instagramLogo, photoImg,
    pinterestLogo,
    rightNews1,
    rightNews2,
    rightNews3,
    rightNews4, twitterLogo,
    vimeoLogo, yotubeLogo
} from "../../image";
import {AboutUsModal} from "../aboutUsModal/AboutUsModal";
import {PockemonInfo, PockemonsPack} from "../../core/types";
import {loadPockemonsInfo} from "../../core/store/pockemons/pockemonsSlice";
import {getPockemonsInfo} from "../../core/Api";
import {useAppDispatch, useAppSelector} from "../../core/hooks/hooks";
import {usePockemonInfo} from "../../core/hooks/usePockemonInfo";

export const RibbonPanel = () => {
    const { pockemonsPack } = useAppSelector(state => state.pockemonsReducer)
    const pockemonInfo = usePockemonInfo(pockemonsPack.length-3, pockemonsPack.length-1)
    const [showAboutAthorModal, setShowAboutAthorModal] = useState(false)

    const toggleAboutAthorModalActive = () => {
        setShowAboutAthorModal(!showAboutAthorModal)
    }

    return (
        <div className='display-flex'>
            <div className={css.contentRightRibbon}>
                <button className='btn m-b-20'  onClick={toggleAboutAthorModalActive}>О авторе</button>
                <div className='m-b-70'>
                    <img src={photoImg} alt="" className={css.ribbonPhoto}/>
                    <div
                        className={`${css.border} text-center display-flex direction-column align-center font-serif`}>
                        <div className={css.ribbonNewsAuthorName}>Евгений Кильдибаев</div>
                        <div className={css.newsStyleItalic}>Программист</div>
                        <div className={`${css.ribbonNewsText} font-sans`}>Привет, я Женя.
                            Программирование — это способ, которым я выражаю свою творческую сторону миру...
                        </div>
                        <hr className={css.border}/>
                        <div className={css.reference}>
                            <a href="#" className="color-gold">continue reading</a>
                        </div>
                    </div>
                </div>
                <button className='btn m-b-20'>Featured posts</button>
                <div>
                    {pockemonInfo.map(pockemon => (
                            <div className={`${css.border} m-b-30`} key={pockemon.name}>
                                <img src={pockemon.photoURL} alt="" className={css.ribbonPhoto}/>
                                <div className={`${css.border} text-center display-flex direction-column align-center`}>
                                    <div className={`${css.ribbonNewsTitleDirection} font-sans color-gold`}>
                                        {pockemon.name}
                                    </div>
                                    <div className={`${css.ribbonNewsTitleText} font-serif`}>
                                        {pockemon.abilities[0].ability.name}
                                    </div>
                                    <div className={`${css.ribbonNewsSignature} display-flex justify-between font-serif`}>
                                        <div>Pockemon ID</div>
                                        <div>{pockemon.id}</div>
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>
                <button className="btn">Categories</button>
                <div className="m-b-70">
                    <div
                        className={`${css.category} border-bottom display-flex justify-between align-center font-serif`}>
                        <div>Fight</div>
                        <div>(23)</div>
                    </div>
                    <div
                        className={`${css.category} border-bottom display-flex justify-between align-center font-serif`}>
                        <div>Defence</div>
                        <div>(7)</div>
                    </div>
                    <div
                        className={`${css.category} border-bottom display-flex justify-between align-center font-serif`}>
                        <div>Ability</div>
                        <div>(16)</div>
                    </div>
                    <div
                        className={`${css.category} border-bottom display-flex justify-between align-center font-serif`}>
                        <div>Stats</div>
                        <div>(5)</div>
                    </div>
                    <div className={`${css.category} border-bottom display-flex justify-between align-center font-serif`}>
                        <div>Special attack</div>
                        <div>(12)</div>
                    </div>
                </div>
                <button className='btn m-b-20'>Social media</button>
                <div className='m-b-70'>
                    <div className='display-flex justify-between m-b-3'>
                        <button
                            className={`${css.mediaBtn} display-flex direction-column align-center justify-center`}>
                            <img src={facebookLogo} alt="" className={css.logoWidth}/>
                            <div className={`${css.mediaBtnText} font-sans`}>
                                <div>32k</div>
                                <div>likes</div>
                            </div>
                        </button>
                        <button
                            className={`${css.mediaBtn} display-flex direction-column align-center justify-center`}>
                            <img src={pinterestLogo} alt="" className={css.logoWidth}/>
                            <div className={`${css.mediaBtnText} font-sans`}>
                                <div>814</div>
                                <div>followers</div>
                            </div>
                        </button>
                        <button
                            className={`${css.mediaBtn} display-flex direction-column align-center justify-center`}>
                            <img src={vimeoLogo} alt="" className={css.logoWidth}/>
                            <div className={`${css.mediaBtnText} font-sans`}>
                                <div>165</div>
                                <div>followers</div>
                            </div>
                        </button>
                    </div>
                    <div className="display-flex justify-between m-b-3">
                        <button
                            className={`${css.mediaBtn} display-flex direction-column align-center justify-center`}>
                            <img src={dribbleLogo} alt="" className={css.logoWidth}/>
                            <div className={`${css.mediaBtnText} font-sans`}>
                                <div>6k</div>
                                <div>followers</div>
                            </div>
                        </button>
                        <button
                            className={`${css.mediaBtn} display-flex direction-column align-center justify-center`}>
                            <img src={twitterLogo} alt="" className={css.logoWidth}/>
                            <div className={`${css.mediaBtnText} font-sans`}>
                                <div>130k</div>
                                <div>followers</div>
                            </div>
                        </button>
                        <button
                            className={`${css.mediaBtn} display-flex direction-column align-center justify-center`}>
                            <img src={behanceLoge} alt="" className={css.logoWidth}/>
                            <div className={`${css.mediaBtnText} font-sans`}>
                                <div>37k</div>
                                <div>followers</div>
                            </div>
                        </button>
                    </div>
                    <div className="display-flex justify-between">
                        <button
                            className={`${css.mediaBtn} display-flex direction-column align-center justify-center`}>
                            <img src={instagramLogo} alt="" className={css.logoWidth}/>
                            <div className={`${css.mediaBtnText} font-sans`}>
                                <div>854k</div>
                                <div>followers</div>
                            </div>
                        </button>
                        <button
                            className={`${css.mediaBtn} display-flex direction-column align-center justify-center`}>
                            <img src={yotubeLogo} alt="" className={css.logoWidth}/>
                            <div className={`${css.mediaBtnText} font-sans`}>
                                <div>52k</div>
                                <div>subscribers</div>
                            </div>
                        </button>
                        <button
                            className={`${css.mediaBtn} display-flex direction-column align-center justify-center`}>
                            <img src={googleLogo} alt="" className={css.logoWidth}/>
                            <div className={`${css.mediaBtnText} font-sans`}>
                                <div>642</div>
                                <div>followers</div>
                            </div>
                        </button>
                    </div>
                </div>
                <button className='btn'>Tags</button>
                <div>
                    <button className={css.tag}>Business</button>
                    <button className={css.tag}>Freelance</button>
                    <button className={css.tag}>Money</button>
                    <button className={css.tag}>Experience</button>
                    <button className={css.tag}>Lifestyle</button>
                    <button className={css.tag}>SEO</button>
                    <button className={css.tag}>Wordpress</button>
                    <button className={css.tag}>Marketing</button>
                    <button className={css.tag}>UX</button>
                    <button className={css.tag}>Modern</button>
                    <button className={css.tag}>Success</button>
                    <button className={css.tag}>Nature</button>
                </div>
            </div>
            {showAboutAthorModal && <AboutUsModal closeModal={toggleAboutAthorModalActive} />}
        </div>
    )
}