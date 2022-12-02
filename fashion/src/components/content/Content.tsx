import React from "react"
import css from './Content.module.css'
import {Banner} from "../banner/Banner";
import {PostsArea} from "../postsArea/PostsArea";
import {RibbonPanel} from "../ribbonPanel/RibbonPanel";
import {InstagramWidget} from "../instagramWidget/InstagramWidget";

export const Content = () => {
    return (
        <div className={css.content}>
            <div className={'display-flex direction-column align-center'}>
                <div className={`display-flex direction-column align-start m-b-80`}>
                    <Banner />
                    <div className='display-flex justify-center wrap'>
                        <PostsArea />
                        <RibbonPanel />
                    </div>
                </div>
                <InstagramWidget />
            </div>
        </div>

    )
}