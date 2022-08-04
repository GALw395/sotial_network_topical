import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'



const DialogsItem = () => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to='/dialogs/1'>Alex</NavLink>
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                <DialogsItem />
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Lera</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Tania</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Marina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Nixie</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>Bla bla</div>
                <div className={s.message}>Hi Nixie.</div>
            </div>
        </div>
    )
}

export default Dialogs;