import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import no_image from "../../../upload/no-image.png";


const Ava = (props) => {

    if (!props.profile){
        return <Preloader />
    }
    return<div>
        <div>
            <img src='https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg'/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            <img  src={props.profile.photos.large
                ? props.profile.photos.large
                :  no_image}/>
        </div>
        <div>
            {props.profile.fullName}

        </div>
        <div>
            <br/>
        </div>
    </div>
}
export default Ava;