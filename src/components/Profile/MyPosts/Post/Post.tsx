import classes from './Post.module.css';


const Post = () => {

    return (

        <div className={classes.item}>
            <img src="https://cdnb.artstation.com/p/assets/covers/images/045/154/127/large/thibaut-granet-thibaut-granet-template-artstation-jinx.jpg?1642036430" alt="#" />
            post 1
            <div>
                <span>like</span>
            </div>
        </div>

    )
}

export default Post;