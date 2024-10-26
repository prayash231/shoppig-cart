import { useState } from 'react'
import './App.css'
import Allproducts from './components/Allproducts/Allproducts'
import CartContainer from './components/CartContainer/CartContainer'
import Navbar from './components/Header/Navbar'

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart"
  })

  const [selectedProducts, setSelectedProducts] = useState([]);

  const [price, setPrice] = useState(0);

  const handleIncreasePrice = (prc) => {
      setPrice(price + prc)
  }

  const handleDeletePrice = (id) => {
    const product = selectedProducts.find((p) => p.id === id);
    setPrice(price - product.price)
  }

  const handleDelete = (id) => {
    // console.log(id);
    handleDeletePrice(id)
    const newProduct = selectedProducts.filter((p) => p.id !== id)
    setSelectedProducts(newProduct)
  }

  const handleSelectedProduct = (product) => {
    // console.log(product);
    const isExist = selectedProducts.find((p) => p.id === product.id);

    if(isExist){
      // console.log("age thekei ache");
      alert('r add kora jabe na');
    }
    else{
      // console.log("naiii");
      handleIncreasePrice(product.price)
      const newProducts = [...selectedProducts, product];
      setSelectedProducts(newProducts);
    }

  }
  // console.log(selectedProducts);

  const handleIsActiveState = (status) => {
    if(status === "cart"){
      setIsActive({
        cart: true,
        status: "cart"
      })
    }
    else{
      setIsActive({
        cart: false,
        status: "about"
      })
    }
  }

  // console.log(isActive);

  return (
    <>
      <Navbar price={price} selectedProducts={selectedProducts.length}></Navbar>

      <div className='flex'>

        <Allproducts handleSelectedProduct={handleSelectedProduct}></Allproducts>

        <CartContainer handleDelete={handleDelete} selectedProducts={selectedProducts} isActive={isActive} 
        handleIsActiveState={handleIsActiveState}></CartContainer>

      </div>
    </>
  )
}

export default App
