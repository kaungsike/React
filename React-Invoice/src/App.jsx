import { Button } from "flowbite-react";
import React, { useState } from "react";
import Container from "./components/Container";
import MainHeading from "./components/MainHeading";
import SubHeading from "./components/SubHeading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CheckOutForm from "./components/CheckOutForm";
import CheckOutItemList from "./components/CheckOutItemList";
import Drawer from "./components/Drawer";
import { Toaster } from "react-hot-toast";
import GeneralProvider from "./context/GeneralProvider";

const App = () => {
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

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handelDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const removeItem = (id) => {
    setItems(
      items.filter((item) => {
        item.id !== id;
      })
    );
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

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <GeneralProvider>
      <main className="flex flex-col min-h-screen py-10">
        <Header>
          <Container>
            <MainHeading>Invoice App</MainHeading>
            <SubHeading>MMS IT</SubHeading>
          </Container>
        </Header>

        <Container>
          <CheckOutForm addItem={addItem} products={products}></CheckOutForm>
          <CheckOutItemList
            updateItemQuantity={updateItemQuantity}
            removeItem={removeItem}
            addItem={addItem}
            items={items}
          ></CheckOutItemList>
        </Container>

        <Footer />
        <Drawer
          addProduct={addProduct}
          products={products}
          isDrawerOpen={isDrawerOpen}
          handelDrawer={handelDrawer}
        ></Drawer>
        <Toaster />
      </main>
    </GeneralProvider>
  );
};

export default App;
