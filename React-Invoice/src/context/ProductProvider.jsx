import React, { createContext, useState } from 'react';


const ProductContext = createContext();

const ProductProvider = ({children}) => {

    const [products,setProducts] = useState(
        [
          {
              id: 1,
              title: "Wireless Mouse",
              price: 25.99,
              stock: 150
          },
          {
              id: 2,
              title: "Mechanical Keyboard",
              price: 79.99,
              stock: 75
          },
          {
              id: 3,
              title: "HD Monitor",
              price: 199.99,
              stock: 30
          },
          {
              id: 4,
              title: "USB-C Hub",
              price: 29.99,
              stock: 100
          },
          {
              id: 5,
              title: "Laptop Stand",
              price: 49.99,
              stock: 200
          }
      ]
      );


  return (
    <ProductContext.Provider>{children}</ProductContext.Provider>
  )
}

export default ProductProvider