import React from "react";
import Ava from "./Ava/Ava";
import InfoContainer from "./Info/InfoContainer";
import Preloader from "../common/Preloader/Preloader";

const Profile=(props)=>{
    if (!props.profile){
        return <Preloader />
    }

       return (
           <div>
                <Ava profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
                <InfoContainer />
           </div>
       )

}
export default Profile;
