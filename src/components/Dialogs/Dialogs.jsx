
import s from './Dialogs.module.css'
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import React from 'react';


const Dialogs = (props) => {
    // debugger;

    let dialogsElements = 
    props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = 
    props.dialogsPage.messages.map( m => <Message message={m.message}/>)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.addMessage();
    }

    let onChangeMessage = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }
    // console.log(props.newMessageText)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={onChangeMessage}
                ref={newMessageElement} 
                value={props.newMessageText} ></textarea>
                <button onClick={addMessage}>Add messaqge </button>
            </div>
        </div>
    )
};

export default Dialogs;