
import React from "react";
import Ava from "./Ava/Ava";
import InfoContainer from "./Info/InfoContainer";
import {Navigate} from "react-router";

const Profile=(props)=>{
       return (
           <div>
                <Ava profile={props.profile} />
                <InfoContainer />
           </div>
       )

}
export default Profile;
