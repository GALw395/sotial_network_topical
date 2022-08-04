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
    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>

                <DialogsItem name='Alex' id='1'/>
                <DialogsItem name='Lera' id='2'/>
                <DialogsItem name='Tania' id='3'/>
                <DialogsItem name='Marina' id='4'/>
                <DialogsItem name='Nixie' id='5'/>

            </div>
            <div className={s.messages}>

                <Message  message='Hi!'/>
                <Message  message='Bla bla'/>
                <Message  message='Hi Nixie.'/>

            </div>
        </div>
    )
}

export default Dialogs;