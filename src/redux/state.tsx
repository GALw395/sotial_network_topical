import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"


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

        sidebar: {},
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

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    },

}

export default store;