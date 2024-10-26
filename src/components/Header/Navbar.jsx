const Navbar = ({ selectedProducts, price }) => {
    return (
        <div>
            <li>Cart: {selectedProducts}</li>
            <li>Dollar:$ {price}</li>
        </div>
    );
};

export default Navbar;