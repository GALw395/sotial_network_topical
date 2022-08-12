import DialogsItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';


const Dialogs = (props: any) => {



    let dialogsElement = props.dialogs.map((d: { name: any; id: any; }) => <DialogsItem name={d.name} id={d.id} />)
    let messagesElement = props.messages.map((m: { message: any; }) => <Message message={m.message} />)

    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>

                {dialogsElement}

            </div>
            <div className={s.messages}>

                {messagesElement}

            </div>
        </div>
    )
}

export default Dialogs;