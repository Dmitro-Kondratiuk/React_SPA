import class_name from "./Nav.module.css"
import {NavLink} from "react-router-dom";

function Nav(){
    let dialog = "/dialog"
    let profile = "profile"
    let news = "/news"
    let music = "/music"
    let setting = "/settings"
    let users = "/users"


    return(
        <nav className={class_name.nav}>
            <div>
                <NavLink to={profile} className = { navData => navData.isActive ? class_name.active : class_name.item }>Profile</NavLink>
            </div>
            <div>
                <NavLink to={dialog} className = { navData => navData.isActive ? class_name.active : class_name.item }>Messages</NavLink>
            </div>
            <div>
                <NavLink to={news} className = { navData => navData.isActive ? class_name.active : class_name.item }>News</NavLink>
            </div>
            <div>
                <NavLink to={music} className = { navData => navData.isActive ? class_name.active : class_name.item }>Music</NavLink>
            </div>
            <div>
                <NavLink to={users} className={ navData => navData.isActive ? class_name.active : class_name.item }>Users</NavLink>
            </div>
            <div><br/></div>
            <div>
                <NavLink to={setting} className = { navData => navData.isActive ? class_name.active : class_name.setting }>Settings</NavLink>
            </div>
        </nav>
    );
}
export  default  Nav;