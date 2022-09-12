import  class_name from "./Info.css"
import React from "react";
import Post from "../MyPost/Post";


const  Info= (props)=> {
    let post = props.posts.map(p=> <Post name={p.name} message={p.message} key={p.id} likeCount={p.likeCount} />)
    let newRef = React.createRef()

    let addPost = ()=>{
        props.addPost()

    }
    let onPostChange = ()=>{
        let text  = newRef.current.value;
        props.onPostChange(text)
    }
    return(
        <div className={class_name.content}>
            <div>
                My posts
                <div>
                    <textarea onChange={onPostChange} rows="3" ref={newRef} value={props.newPostText} placeholder="Enter your message" ></textarea>
                </div>
                <div>
                    <button onClick={addPost} >Add post</button>
                </div>

                <div><h4>New post</h4></div>
                <div>
                    {post}
                </div>
            </div>
        </div>
    );
}
export default Info;