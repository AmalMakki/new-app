import { Fragment } from "react";
import banquet from '../../assets/Free Photo _ Top view meals tasty yummy different pastries and dishes on the brown surface.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
const Header = props => {
    return <Fragment>
        <header  className={classes.header}>
        <h1>
            ReactMeals
            
        </h1>
        <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={banquet} alt='a banquet'/>
        </div>
    </Fragment>
}
export default Header 