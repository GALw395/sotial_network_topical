import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props: any) => {

    let postsElement = props.posts.map( ( p: { message: any; likesCount: any; } ) => <Post message={p.message} likesCount={p.likesCount} />)

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