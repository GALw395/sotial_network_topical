
let rerenderEntireTree = (props: any) => {
    console.log('loding');
    
}


let state = {

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


}

export const addPost = () => {
    let newPost = { id: 4, message: state.profilePage.newPostText, likesCount: 0 }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: any) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer
}

export default state;