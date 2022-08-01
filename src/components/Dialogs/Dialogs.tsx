import s from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>Alex</div>
                <div className={s.dialog}>Lera</div>
                <div className={s.dialog}>Tania</div>
                <div className={s.dialog}>Marina</div>
                <div className={s.dialog}>Nixie</div>
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