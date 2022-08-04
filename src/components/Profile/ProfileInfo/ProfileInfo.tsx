import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {

    return (<>
        <div className={classes.images}>
            <img src="https://klike.net/uploads/posts/2021-01/1610433559_5.jpg" alt="#" />
        </div>
        <div className={classes.ava}>
            ava + description
            <img src="https://cdnb.artstation.com/p/assets/covers/images/045/154/127/large/thibaut-granet-thibaut-granet-template-artstation-jinx.jpg?1642036430" alt="#" />
        </div>
    </>

    )
}

export default ProfileInfo;