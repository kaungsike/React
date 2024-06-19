import { Button } from "flowbite-react";
import React, { useState } from "react";
import Container from "./components/Container";
import MainHeading from "./components/MainHeading";
import SubHeading from "./components/SubHeading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CheckOutForm from "./components/CheckOutForm";

const App = () => {

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
  )

  return (
    <main className="flex flex-col min-h-screen py-10">
      <Header>
        <Container>
        <MainHeading>Invoice App</MainHeading>
        <SubHeading>MMS IT</SubHeading>
        </Container>
      </Header>
      
     <Container>
     <CheckOutForm products={products}></CheckOutForm>
     </Container>

      <Footer>
        <Container>
          <div className="flex gap-3 justify-end items-center">
              <Button color="light">Manage Product</Button>
              <Button>Print</Button>
          </div>
        </Container>
      </Footer>
    </main>
  );
};

export default App;
