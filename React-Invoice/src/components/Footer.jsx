import React, { useContext } from "react";
import Container from "./Container";
import { Button } from "flowbite-react";
import { GeneralContext } from "../context/GeneralProvider";





const Footer = () => {

  const {handleDrawer} = useContext(GeneralContext)

  return (
    <footer className="mt-auto">
      <Container>
        <div className="flex gap-3 justify-end items-center">
          <Button color="light" onClick={handleDrawer}>
            Manage Product
          </Button>
          <Button>Print</Button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
