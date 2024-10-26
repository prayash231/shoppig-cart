
import './SingleProduct.css'
const SingleProduct = ({ product, handleSelectedProduct }) => {
    // console.log(product);
    // console.log(handleSelectedProduct);
    const { id, name, image, description, price, category, isFeature } = product;
    
    return (
        <div className='card'>
            {/* <h1>SingleProduct</h1> */}
            <img className='img' src={image} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <div className='cat-price'>
                <p>${price}</p>
                <p>{isFeature?"Feature category":"not category"}</p>
            </div>

            <button onClick={() => handleSelectedProduct(product)}>Add To Cart</button>
        </div>
    );
};

export default SingleProduct;