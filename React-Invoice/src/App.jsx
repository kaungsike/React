import { Button } from "flowbite-react";
import React, { useContext, useState } from "react";
import Container from "./components/Container";
import MainHeading from "./components/MainHeading";
import SubHeading from "./components/SubHeading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CheckOutForm from "./components/CheckOutForm";
import CheckOutItemList from "./components/CheckOutItemList";
import Drawer from "./components/Drawer";
import { Toaster } from "react-hot-toast";
import GeneralProvider, { GeneralContext } from "./context/GeneralProvider";

const App = () => {

  // const {items} = useContext(GeneralContext);


  // const [items, setItems] = useState([
  //   // {
  //   //   id : 1,
  //   //   product : {
  //   //       id: 1,
  //   //       title: "Wireless Mouse",
  //   //       price: 25.99,
  //   //       stock: 150
  //   //   },
  //   //   quantity : 3,
  //   //   cost : 76.89
  //   // },
  // ]);


  // const addItem = (newItem) => {
  //   setItems([...items, newItem]);
  // };

  // const removeItem = (id) => {
  //   setItems(
  //     items.filter((item) => {
  //       item.id !== id;
  //     })
  //   );
  // };

  // const updateItemQuantity = (id, amount) => {
  //   setItems(
  //     items.map((item) => {
  //       if (item.id === id) {
  //         item.quantity = item.quantity + amount;
  //         item.cost = (item.product.price * item.quantity).toFixed(2);
  //       }
  //       return item;
  //     })
  //   );
  // };

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
          <CheckOutForm></CheckOutForm>
          <CheckOutItemList
          ></CheckOutItemList>
        </Container>

        <Footer />
        <Drawer></Drawer>
        <Toaster />
      </main>
    </GeneralProvider>
  );
};

export default App;
