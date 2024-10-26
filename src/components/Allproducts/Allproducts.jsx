import { useEffect, useState } from "react";
import "./Allproducts.css";
import SingleProduct from "../SingleProduct/SingleProduct";

const Allproducts = ({ handleSelectedProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // console.log(data.products);
        setProducts(data.products);
      });
  }, []);

  return (
    <div>
      <h1>Allproducts.jsx</h1>
      {products.map((p) => (
        <SingleProduct
          handleSelectedProduct={handleSelectedProduct}
          key={p.id}
          product={p}
        ></SingleProduct>
      ))}
    </div>
  );
};

export default Allproducts;
