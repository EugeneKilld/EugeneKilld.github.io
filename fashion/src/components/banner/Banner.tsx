import React from "react"
import css from './Banner.module.css'

export const Banner = () => {
    return (
        <div className={`${css.bannerTitle} display-flex direction-column`}>
            <div className={` ${css.bannerHeaderTitle} color-white font-sans`}>Pika-pikachu</div>
            <div className={`${css.quote} color-white font-serif`}>
                У меня нет крыльев, но есть свобода!
            </div>
            <div className={`${css.bannerAuthor} color-white display-flex justify-between`}>
                <div>Покемоны</div>
                <div>Джесси</div>
                <div>Команда R</div>
            </div>
        </div>
    )
}