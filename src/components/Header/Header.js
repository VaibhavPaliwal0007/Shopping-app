import classes from './Header.module.css';
import MainNavigation from "./MainNavigation"

function Header(props){
    return(
        <>
            <MainNavigation>
              <main className={classes.main}>{props.children}</main>
            </MainNavigation>
        </>
    );
};

export default Header;