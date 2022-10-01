import class_name from "./Info.css"
import React from "react";
import Post from "../MyPost/Post";
import {Field, reduxForm} from "redux-form";
import form from "redux-form/lib/Form";

const PostForm = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter text'} name={'postText'} component={'textarea'}/>
            </div>
            <div>
                <button>Post</button>
            </div>
        </form>
    )
}
const PostReduxForm = reduxForm({form:'post'})(PostForm)
const  Info= (props)=> {
    const addPost = (values) => {
        props.addPost(values.postText)
    }
    let post = props.posts.map(p => <Post name={p.name} message={p.message} key={p.id} likeCount={p.likeCount}/>)

    return (
        <div className={class_name.content}>
            <div>
                My posts
                <div>
                    <PostReduxForm onSubmit={addPost}/>
                    <div><h4>New post</h4></div>
                    <div>
                        {post}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Info;