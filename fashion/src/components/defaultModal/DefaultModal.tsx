import React from "react"
import css from './DefaultModal.module.css'

interface IDefaultModal {
    modalName: string | undefined,
    closeModal: () => void,
    children: React.ReactNode,
}

export const DefaultModal: React.FC<IDefaultModal> = ({modalName, closeModal, children}) => {
    return (
        <div className={css.defaultModal} >
            <div className={css.modalOverlay} data-close='true' onClick={closeModal} />

            <div className={css.modalWindow} >
                <div className={css.modalHeader}>
                    <div>{modalName}</div>
                    <div className={css.modalClose} data-close='true' onClick={closeModal}>&times;</div>
                </div>
                <div className={css.modalBody}>
                    {children}
                </div>
            </div>
        </div>
    )
}