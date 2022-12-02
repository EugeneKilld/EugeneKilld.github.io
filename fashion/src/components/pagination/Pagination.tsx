import React from "react"
import css from './Pagination.module.css'
import {leftArrow, rightArrow} from "../../image";

interface paginationProps {
    changePage: (pageNumber : number) => void
    actualPage: number
}

const getPageNumberList = (actualPage: number) => {
    switch (actualPage) {
        case(1):
        case(2):
            return [1, 2, 3]
        case(3):
            return [2, 3, 4]
        case(4):
            return [3, 4, 5]
        case(5):
            return [4, 5, 6]
        case(6):
        case(7):
        case(8):
            return [1, 6, 7]
        default: return [1, 2, 3]
    }
}

export const Pagination: React.FC<paginationProps> = ({changePage, actualPage}) => {
    const pages = getPageNumberList(actualPage)


    return (
        <div className='display-flex justify-center'>
            <div className={css.pagination}>
                <li className={css.pageItem} onClick={() => changePage(actualPage - 1)} >
                    <img src={leftArrow} alt=""/>
                    <a className="page-link m-l-10">OLDER POST</a>
                </li>
                <li className={css.pageItem} onClick={() => changePage(pages[0])} ><a className="page-link" >{pages[0]}</a></li>
                {actualPage > 5 && <li className={css.pageItem}>...</li>}
                <li className={css.pageItem} onClick={() => changePage(pages[1])}><a className="page-link" >{pages[1]}</a></li>
                <li className={css.pageItem} onClick={() => changePage(pages[2])}><a className="page-link" >{pages[2]}</a></li>
                {actualPage < 6 && <li className={css.pageItem}>...</li>}
                <li className={css.pageItem} onClick={() => changePage(8)}><a className="page-link" >8</a></li>
                <li className={css.pageItem} onClick={() => changePage(actualPage + 1)}>
                    <a className="page-link m-r-10">NEXT POST</a>
                    <img src={rightArrow} alt=""/>
                </li>
            </div>
        </div>
    )
}