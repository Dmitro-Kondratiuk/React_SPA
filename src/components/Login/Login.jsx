import React from "react";
import {Field, reduxForm} from "redux-form";


const LoginForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  placeholder={'Login'} name={'login'} component={'input'} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={'input'} type={'password'} />
            </div>
            <div>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/> remember Me
            </div>
            <button>Login</button>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
const Login=(props)=>{
    const  onSubmit = (formData)=>{
       console.log(formData);
    }
    return (
        <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )

}

export default Login;