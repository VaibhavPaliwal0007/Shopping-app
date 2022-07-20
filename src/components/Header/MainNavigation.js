import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../../assets/logo.png";
import profileImg from "../../assets/profile.svg";

function MainNavigation() {
    return (
        <header className={classes["header"]}>
            <div className={classes["logo"]}>
                <img src={logo} alt="logo" />
            </div>
            <nav className={classes["nav"]}>
                <ul>
                    <li>
                        <NavLink to="" className={classes.active}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="journey" className={classes.active}>
                            The Journey
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="team" className={classes.active}>
                            Team
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="store" className={classes.active}>
                            Store
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="contact" className={classes.active}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className={classes["profile"]}>
                <img src={profileImg} alt="profile"></img>
                <p>Vaibhav</p>
            </div>
        </header>
    );
}

export default MainNavigation;
