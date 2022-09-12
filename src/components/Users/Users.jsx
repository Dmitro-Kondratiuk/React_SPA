import class_name from  './Users.module.css'
import React from "react";
import no_image from "../../upload/no-image.png"
import Preloader from "../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";

const  Users=(props)=> {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return <>
        {
            props.isFetching ? <Preloader /> : null
        }
        <div>
            <div>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p ? class_name.active:class_name.item }
                                 onClick={(e) => {
                                     props.onPage(p)
                                 }}
                    >
                        {p}
                    </span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img className={class_name.image} src={u.photos.small !== null ? u.photos.small : no_image}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingProgress.some(id =>id===u.id)}
                                          onClick={() => {props.ignore(u.id)}}>Ignore</button>
                                : <button disabled={props.followingProgress.some(id =>id===u.id)}
                                          onClick={() => {props.follow(u.id)}}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>userID = {u.id}</div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    </>
}

export default Users;