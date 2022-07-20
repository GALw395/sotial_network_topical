import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {

    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink  to={"/profile"} className={({isActive}) =>`${isActive ? classes.active : ''}`}>Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to={"/dialogs"} className={({isActive}) =>`${isActive ? classes.active : ''}`}>Messages</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to={"/news"} className={({isActive}) =>`${isActive ? classes.active : ''}`}>News</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to={"/music"} className={({isActive}) =>`${isActive ? classes.active : ''}`}>Music</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to={"/settings"} className={({isActive}) =>`${isActive ? classes.active : ''}`}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;