
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'


let store = {
    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 15 },
                { id: 2, message: 'My first post?', likesCount: 20 },
                { id: 3, message: 'Bla bla bla', likesCount: 5 },
            ],
            newPostText: 'test add text',

        },

        dialogsPage: {
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
        },


    },
    _callSubscriber(props: any) {
        console.log('loding');
    },

    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },

    dispatch(action: any) {
        if (action.type === ADD_POST) {
            let newPost = { id: 4, message: this._state.profilePage.newPostText, likesCount: 0 }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({ id: 4, message: body })
            this._callSubscriber(this._state)
        }
    },

    

}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text: any) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body: any) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})


export default store;