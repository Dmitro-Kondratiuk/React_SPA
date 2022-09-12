import class_name from "../Dialog.module.css";

function Message(props){
    return (
        <div>
            <div>
                <div className={class_name.dialog}>{props.message} </div>
            </div>
        </div>


    );
}
export  default  Message;