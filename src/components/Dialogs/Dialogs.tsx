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

    let dialogsData = [
        {id: 1, name: 'Alex'},
        {id: 2, name: 'Lera'},
        {id: 3, name: 'Tania'},
        {id: 4, name: 'Marina'},
        {id: 5, name: 'Nixie'}    
    ]

    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Bla bla'},
        {id: 3, message: 'Hi Nixie.'}  
    ]



    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>

                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogsItem name={dialogsData[4].name} id={dialogsData[4].id}/>

            </div>
            <div className={s.messages}>

                <Message  message={messagesData[0].message}/>
                <Message  message={messagesData[1].message}/>
                <Message  message={messagesData[2].message}/>

            </div>
        </div>
    )
}

export default Dialogs;