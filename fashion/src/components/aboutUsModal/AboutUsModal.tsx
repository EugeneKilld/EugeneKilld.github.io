import React from "react"
import {DefaultModal} from "../defaultModal/DefaultModal";
import {photoImg} from "../../image";

interface IAboutUsModal {
    closeModal: () => void
}

export const AboutUsModal: React.FC<IAboutUsModal> = ({closeModal}) => {
    return (
        <DefaultModal modalName={'О авторе'} closeModal={closeModal}>
            <div className='modalText'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Maxime sunt id nihil? Quas adipisci beatae deleniti quisquam tenetur, temporibus inventore rerum totam
                quam magni.
                Reiciendis dignissimos atque, aperiam rerum dolore molestias corrupti aspernatur facere,
                neque enim totam? Distinctio magnam quo repudiandae enim labore natus nobis ducimus veritatis quia nam,
                eligendi impedit, eaque laborum tempore sint alias libero aspernatur explicabo voluptates cumque
                molestiae!
                Dolorum illum qui delectus fugit, quasi neque maxime similique odit iure nihil officia sit. Voluptatum
                sed sequi natus.
            </div>
            <div className="modal-photo">
                <img src={photoImg} alt="" className='modalImg'/>
            </div>
        </DefaultModal>
    )
}