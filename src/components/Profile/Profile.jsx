
import React from "react";
import Ava from "./Ava/Ava";
import InfoContainer from "./Info/InfoContainer";

const Profile=(props)=>{

       return (
           <div>
                <Ava profile={props.profile} />
                <InfoContainer />
           </div>
       )

}
export default Profile;
