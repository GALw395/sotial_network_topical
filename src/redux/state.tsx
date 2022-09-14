
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
        },


    },
    getState() {
        return this._state;
    },
    _callSubscriber(props: any) {
        console.log('loding');

    },
    addPost() {
        let newPost = { id: 4, message: this._state.profilePage.newPostText, likesCount: 0 }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText: any) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },
}


export default store;