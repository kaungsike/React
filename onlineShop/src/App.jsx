import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CategorySection from "./components/CategorySection";
import ProductSection from "./components/ProductSection";

const App = () => {
  return (
    <>
      <Header />
      <CategorySection/>
      <ProductSection/>
      <Footer />
    </>
  );
};

export default App;
