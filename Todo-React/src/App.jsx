// rafca

import React from "react";

import ListCreateForm from "./ListCreateForm";
import Header from "./Header";
import ListStatus from "./ListStatus";
import ListGroup from "./ListGroup";

export const App = () => {
  return (
    <section
      id="container"
      className="border bg-teal-200 border-teal-400 w-[500px] mx-auto mt-10 p-10"
    >
      <Header text="Create Your List"/>
      <ListCreateForm/>

      <ListStatus/>

      <ListGroup/>

    </section>
  );
};

export default App;
