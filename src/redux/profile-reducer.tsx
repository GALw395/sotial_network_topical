
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'My first post?', likesCount: 20 },
        { id: 3, message: 'Bla bla bla', likesCount: 5 },
    ],
    newPostText: 'test add text',

}

const profileReducer = (state: any = initialState, action: any) => {


    switch (action.type) {
        case ADD_POST:
            let newPost = { id: 4, message: state.newPostText, likesCount: 0 };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text: any) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer;