import React from "react";
import { ModeToggle } from "../components/theme/mode-toggle";
import Container from "./Container";

const Header = () => {
  return (
    <div className="border-b bg-background border-border">
      <Container>
        <div className="w-full flex items-center justify-between py-4">
            <div>
                <h1 className="text-2xl font-bold dark:text-white">Invoice App</h1>
            </div>
            <ModeToggle />
        </div>
      </Container>
    </div>
  );
};

export default Header;
