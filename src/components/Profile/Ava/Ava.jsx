import React from "react";
import no_image from "../../../upload/no-image.png";
import ProfileStatus from "../ProfileStatus";
const Ava = (props) => {
    return<div>
        <div>
            <img  src={props.profile.photos.large
                ? props.profile.photos.large
                :  no_image}/>
        </div>
        <div>
            <span> {props.profile.fullName}</span>
            <br/>
            <div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
            </div>
        </div>
        <div>
            <br/>
        </div>
    </div>
}
export default Ava;