import React, {useState} from "react"
import css  from './Header.module.css'
import '../../index.css'
import {AboutUsModal} from "../aboutUsModal/AboutUsModal";
import {Link} from "react-router-dom";
import {ScrollToTop} from "../../core/helpers";
import {PockemonsListModal} from "../pockemonsListModal/PockemonsListModal";

export const Header = () => {
    const [showAboutUsModal, setShowAboutUsModal] = useState(false)
    const [showPockemonsListModal, setShowPockemonsListModal] = useState(false)

    const toggleAboutUsModalActive = () => {
        setShowAboutUsModal(!showAboutUsModal)
    }

    const togglePockemonsListModalActive = () => {
        setShowPockemonsListModal(!showPockemonsListModal)
    }

    return (
        <div className={`${css.header} display-flex justify-between`}>
            <Link className={`${css.headerLeftSide} font-serif`} to="/" onClick={ScrollToTop}>Pockemon</Link>
            <div className={`${css.headerRightSide} font-serif`}>
                <ul className={`${css.menu} display-flex justify-between`}>
                    <li>
                        <div className={css.menuText} id="recipes" onClick={togglePockemonsListModalActive}>Список покемонов</div>
                    </li>
                    <li>
                        <div className={css.menuText} id="aboutUs" onClick={toggleAboutUsModalActive}>Автор</div>
                    </li>
                </ul>
            </div>
            {showAboutUsModal && <AboutUsModal closeModal={toggleAboutUsModalActive} />}
            {showPockemonsListModal && <PockemonsListModal closeModal={togglePockemonsListModalActive} />}
        </div>
    )
}