import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

    return (

        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you?' like='15'/>
                <Post message='My first post' like='20'/>
            </div>
        </div>

    )
}

export default MyPosts;