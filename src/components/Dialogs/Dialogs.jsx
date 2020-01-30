import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {
    let state = props.messagesPage;
    let dialogsElements = state.dialogs.map(
        d => <DialogItem name={d.name} id={d.id} key={d.id}/>
    )
    let messagesElements = state.messages.map(
        m => <Message message={m.message} key={m.id}/>
    )
    let newMessageBady = state.newMassageBady;
    let newMessageText = React.createRef()


let addNewMess= (values)=>{
        props.sendMessage(values.newMessageBady)
}
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
<AddMessageFormRedux onSubmit={addNewMess}/>
        </div>
    );
}
const maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newMessageBady"} validate={[required, maxLength50]} placeholder='Enter you text'/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)
export default Dialogs;