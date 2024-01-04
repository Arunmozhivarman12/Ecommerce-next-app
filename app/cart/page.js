'use client'
import { useSelector } from "react-redux";

const cart = () =>{
    const cart = useSelector(state=>state.cart.product)
    console.log(cart)
    return(
        <div>
    
            {
                cart.map((item) => (
                   <p key={item.id}> {item.name}</p>
                ))
            }
            
        </div>
    )
}

export default cart;