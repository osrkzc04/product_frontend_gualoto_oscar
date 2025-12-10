import { use, useEffect, useState } from 'react'
import HelloWorldCard from './components/HelloWorldCard.jsx'
import './App.css'

import { productService } from './services/productService.js'

function App() {
  const [products, setPorducts] = useState([])

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await productService.getAllProducts();
      setPorducts(data);
      printProducts(data);
    } catch (error) {
      console.error('Error loading products in App:', error);
    }
  };

  async function printProducts(products) {
    products.forEach(product => {
      console.log(product);
    });
  } 

  return (
    <>
      <HelloWorldCard />
    </>
  )
}

export default App
