import React, { createContext, useState } from "react";

export const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Wireless Mouse",
      price: 25.99,
      stock: 150,
    },
    {
      id: 2,
      title: "Mechanical Keyboard",
      price: 79.99,
      stock: 75,
    },
    {
      id: 3,
      title: "HD Monitor",
      price: 199.99,
      stock: 30,
    },
    {
      id: 4,
      title: "USB-C Hub",
      price: 29.99,
      stock: 100,
    },
    {
      id: 5,
      title: "Laptop Stand",
      price: 49.99,
      stock: 200,
    },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const [items, setItems] = useState([
    // {
    //   id : 1,
    //   product : {
    //       id: 1,
    //       title: "Wireless Mouse",
    //       price: 25.99,
    //       stock: 150
    //   },
    //   quantity : 3,
    //   cost : 76.89
    // },
  ]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const updateItemQuantity = (id, amount) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          item.quantity = item.quantity + amount;
          item.cost = (item.product.price * item.quantity).toFixed(2);
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    console.log(id)
    setItems(
      items.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <GeneralContext.Provider
      value={{ openDrawer, handleDrawer, products, addProduct ,items,addItem,updateItemQuantity,removeItem}}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralProvider;
