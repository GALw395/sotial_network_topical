import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'



const DialogsItem = (props: any) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: any) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {

    let dialogs = [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Lera' },
        { id: 3, name: 'Tania' },
        { id: 4, name: 'Marina' },
        { id: 5, name: 'Nixie' }
    ]

    let messages = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Bla bla' },
        { id: 3, message: 'Hi Nixie.' }
    ]

    let dialogsElement = dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)
    let messagesElement = messages.map(m => <Message message={m.message} />)

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