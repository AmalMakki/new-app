import { useState } from "react";
import Header from "./components/Layout/Header";
import Meal from "./components/Meals/Meal";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/cartProvider";
function App() {
  const [cartIsShown , setCartIsShown]=useState(false)
  const showCartHAndler =()=> {
    setCartIsShown(true)
  }
  const hideCartHandler =()=>{
    setCartIsShown(false)
  }
  return (
   <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
    <Header onShowCart ={showCartHAndler}/>
    <main>
      <Meal/>
    </main>
    </CartProvider>
  )
}

export default App;
