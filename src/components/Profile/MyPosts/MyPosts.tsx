import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

    let posts = [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'My first post?', likesCount: 20 },
        { id: 3, message: 'Bla bla bla', likesCount: 5 }
    ]

    let postsElement = posts.map( p => <Post message={p.message} likesCount={p.likesCount} />)

    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>

    )
}

export default MyPosts;