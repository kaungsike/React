import React from "react";
import Container from "./Container";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="w-full">
      <Container>
        <Navbar className="sticky top-0 z-10 h-max max-w-full shadow-none border-b border-b-gray-400 rounded-none px-4 py-2 lg:px-8 lg:py-4">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium"
            >
              Invoice
            </Typography>
          </div>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
