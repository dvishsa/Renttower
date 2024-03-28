import React from "react"
import "./cart.css"
const Basket = () => {
    const handleSeeCart = () => {
        const url = "/Carts"; 
        window.location.href = url; 
      };
    
    return(
        <div class="shopping-cart" data-product-count="0" onClick={handleSeeCart}>
            <span class="cart-icon">&#128722;</span>
        </div>
    )
    }
export default Basket