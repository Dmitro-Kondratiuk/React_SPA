import {NavLink} from "react-router-dom";
import class_name from "../Dialog.module.css";

function DialogItem(props){

    let path = "/dialog/" + props.id
    return (
        <div >
            <NavLink to={path} className={ navData => navData.isActive ? class_name.active : class_name.dialog }>{props.name}</NavLink>
        </div>
    );
}
export default  DialogItem;