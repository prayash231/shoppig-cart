const Cart = ({ selectedProducts, handleDelete }) => {
   // console.log(selectedProducts);
  return (
    <div>
      {/* <h1>Cart.jsx</h1> */}
      {
        selectedProducts.map((product) => (
            <div key={product.id}>
                <div className="flex">
                    <img className="selected-img" src={product.image} alt="" />
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button onClick={() => handleDelete(product.id)}>Delete</button>
                </div>
            </div>
        ))
      }
    </div>
  );
};

export default Cart;
