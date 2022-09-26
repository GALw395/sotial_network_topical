
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'

let initialState = {
    messages: [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Bla bla' },
        { id: 3, message: 'Hi Nixie.' },
    ],
    dialogs: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Lera' },
        { id: 3, name: 'Tania' },
        { id: 4, name: 'Marina' },
        { id: 5, name: 'Nixie' },
    ],
    newMessageBody: '',
}

const dialogsReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({ id: 4, message: body })
            return state
        default:
            return state
    }

}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body: any) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer;