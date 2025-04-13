import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CategoriesSection from "./components/CategoriesSection";
import ProductSection from "./components/ProductSection";
import Container from "./components/Container";

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <CategoriesSection />
        <ProductSection />
        <Footer />
      </Container>
    </>
  );
};

export default App;
