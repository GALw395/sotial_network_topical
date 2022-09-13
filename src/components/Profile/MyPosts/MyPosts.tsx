import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props: any) => {


    let postsElement = props.posts.map((p: { message: any; likesCount: any; }) => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement: any = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    return (

        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>

    )
}

export default MyPosts;