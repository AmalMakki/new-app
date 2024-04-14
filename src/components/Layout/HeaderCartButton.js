import CartIcon from "../Cart/Carticon"
import { Fragment, useContext , useEffect , useState } from "react"
import CartContext from "../../store/cart-context"
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = props => {
    const [btnIsHighlighted , setBtnIsHighlighted]=useState(false)
    const cartCtx = useContext(CartContext)
    const {items} = cartCtx
    const numOfCartItems =items.reduce((currNum , item)=>{
        return currNum + item.amount
    } , 0)
    const btnClasses =`${classes.button} ${btnIsHighlighted ? classes.bump : ''}`
    useEffect(()=>{
        if(items.length===0){return;}
        setBtnIsHighlighted(true)
        const timer= setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300);
        return ()=>{
            clearTimeout(timer)
        }
    } 
    , [items])
    return (
        <Fragment>
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}> <CartIcon/> </span>
            <span> Your Cart</span>
            <span className={classes.badge}> {numOfCartItems}</span>
        </button>
        </Fragment>
    )
}
export default HeaderCartButton