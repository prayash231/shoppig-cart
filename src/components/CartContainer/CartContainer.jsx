import './CartContainer.css';
import Cart from '../Cart/Cart';
import About from '../About/About';

const CartContainer = ({ handleIsActiveState, isActive, selectedProducts, handleDelete }) => {
    // console.log(handleIsActiveState);
    // console.log(isActive);
    return (
        <div>
            <h1>CartContainer.jsx</h1>

            <div className="flex">
                <div onClick={() => handleIsActiveState("cart")} 
                className={`${isActive.cart?"active btn":"btn"}`}>
                    CART
                </div>
                <div onClick={() => handleIsActiveState("about")} 
                className={`${isActive.cart?"btn":"active btn"}`}>
                    ABOUT
                </div>
            </div>

            {
               isActive.cart?<Cart handleDelete={handleDelete} selectedProducts={selectedProducts}></Cart>:<About></About>
            }

        </div>
    );
};

export default CartContainer;