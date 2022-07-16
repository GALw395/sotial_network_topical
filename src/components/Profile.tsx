import classes from './Profile.module.css';


const Profile = () => {

    return (
        <div className={classes.content}>
            <div className={classes.images}>
                <img src="https://klike.net/uploads/posts/2021-01/1610433559_5.jpg" alt="#" />
            </div>
            <div className={classes.ava}>
                ava + description
                <img src="https://cdnb.artstation.com/p/assets/covers/images/045/154/127/large/thibaut-granet-thibaut-granet-template-artstation-jinx.jpg?1642036430" alt="#" />
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>post 1</div>
                    <div className={classes.item}>post 2</div>
                </div>
            </div>

        </div>
    )
}

export default Profile;