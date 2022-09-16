import React, {useState, useContext} from 'react'
const CartContext = React.createContext ([]);
export const useCartContext = () => useContext (CartContext);

const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    console.log('carrito: ', cart); /* -----Deje este console.log para ver que funciona bien ahora, en la proxima entrega lo saco--- */
    const addItem = (item, newQuantity) => {
        const newCart = cart.filter(prod => prod.id !== item.id);
        newCart.push ({ ...item , quantity : newQuantity });
        setCart(newCart)
    }
    const removeItem = (id) => setCart (cart.filter(product => product.id !== id));
    const clear = () => setCart ([]);
    const isInCart = (id) => cart.find (product => product.id === id) ? true : false;   
   

    return(
        <CartContext.Provider value={{
            addItem,
            removeItem,
            clear, 
            isInCart, 
        }}> 
        {children}
        </CartContext.Provider>
    )
}

export default CartProvider