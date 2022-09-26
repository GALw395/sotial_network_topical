import DialogsItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';


const Dialogs = (props: any) => {

    let state = props.dialogsPage



    let dialogsElement = state.dialogs.map((d: { name: any; id: any; }) => <DialogsItem name={d.name} id={d.id} />)
    let messagesElement = state.messages.map((m: { message: any; }) => <Message message={m.message} />)
    let newMessageBody = state.newMessageBody

    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: any) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>

                {dialogsElement}

            </div>
            <div className={s.messages}>

                <div>{messagesElement}</div> 
                <div>
                    <div>
                        <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                    </div>               

            </div>
        </div>
    )
}

export default Dialogs;