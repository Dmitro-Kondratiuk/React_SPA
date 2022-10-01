import class_name from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import form from "redux-form/lib/Form";

const MessageForm=(props)=>{
    return(
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={'Enter message'} name={'messageTest'} component={'textarea'} />
            </div>
            <button>Add Message</button>
        </form>
    )
}
const MessageReduxForm = reduxForm({form:'message'})(MessageForm)

const Dialog=(props)=>{

    let dialog = props.state.dialogs.map(d=><DialogItem name={d.name} key={d.id} id={d.id}/>)

    let message = props.state.messages.map( m => <Message message={m.message} key={m.id} /> )

   let  onMessage=(values)=>{
        props.onMessage(values.messageTest)
    }

    return(
      <div className={class_name.dialogs}>
          <div className={class_name.dialogsItems}>
              {dialog}
          </div>
          <div className={class_name.messages}>
              {message}
                <MessageReduxForm onSubmit={onMessage}/>
          </div>

      </div>
    );
}

export default  Dialog;
