import { use, useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import ButtonComponent from './components/ButtonComponent'
import ProductForm from './components/ProductForm'
import './App.css'

import { productService } from './services/productService.js'

function App() {
  const [products, setProducts] = useState([]);
  const [showFrom, setShowForm]=useState(false)
  const [isLoding, setIsLoding] = useState(false)


  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setIsLoding(true)
      const data = await productService.getAllProducts();
      setProducts(data);
      setIsLoding(false)
      //printProducts(data);
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
      <div className='content-start py-5'>
        
        {
          !showFrom &&(
            <ButtonComponent 
              type="primary"
              text="Crear Nuevo Producto"
              onClick={() => setShowForm(true)}
              disabled={false}
            /> 
          )
        }
        {
          showFrom &&(
            <ButtonComponent 
              type="secondary"
              text="Regresar"
              onClick={() => setShowForm(false)}
              disabled={false}
            /> 
          )
        }
      </div>

      {
        !showFrom && (
          <div>
            {
              !isLoding &&(
                   <ProductList products={products} />
                )
            }
            {
              isLoding &&(
                <div>
                  Cargando...
                </div> 
              ) 
            }
          </div>
        )
      }
      {
        showFrom &&(
          <ProductForm
            onSubmit={()=> setShowForm(false)}
            onCancel={()=> setShowForm(false)}
          ></ProductForm>
        )
      }
    </>
  )
}

export default App
