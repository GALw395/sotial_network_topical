import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props: any) => {


    return (
        <div className={classes.content}>

            <ProfileInfo />
            <MyPostsContainer store={props.store}/>

        </div>
    )
}

export default Profile;