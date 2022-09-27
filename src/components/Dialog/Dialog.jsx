import class_name from "./Dialog.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


function Dialog(props){

    let dialog = props.state.dialogs.map(d=><DialogItem name={d.name} key={d.id} id={d.id}/>)

    let message = props.state.messages.map( m => <Message message={m.message} key={m.id} /> )

    let updateMessage=(e)=>{
        let body = e.target.value
        props.updateMessage(body)

    }
    let sendMessage = () =>{
        props.onMessage()
    }

    return(
      <div className={class_name.dialogs}>
          <div className={class_name.dialogsItems}>
              {dialog}
          </div>
          <div className={class_name.messages}>
              {message}
              <div>
                  <textarea
                            onChange={updateMessage}
                            placeholder="Enter your message"
                            value={props.newMessageText}
                  >

                  </textarea>
                  <div >
                      <button onClick={sendMessage} className={class_name.button} >Add Message</button>
                  </div>
              </div>
          </div>

      </div>
    );
}

export default  Dialog;
