import React from "react";
import Container from "./Container";
import { Navbar, Typography, Avatar } from "@material-tailwind/react";
import useCookie from "react-use-cookie";
import useUserStore from "../store/useUserStore";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const [user] = useCookie("user");

  const { userStore, setUserStore } = useUserStore();

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
            <Menu>
              <MenuHandler>
                <div className="flex items-center gap-4">
                  <Avatar
                    src={`${
                      userStore.profile_image
                        ? userStore.profile_image
                        : "https://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
                    }`}
                    alt="avatar"
                  />
                  <div>
                    <Typography variant="h6">{userStore.name}</Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      {userStore.email}
                    </Typography>
                  </div>
                </div>
              </MenuHandler>
              <MenuList>
                <Link to={'profile'} className="block w-full pt-[9px] pb-2 px-3 rounded-md text-start leading-tight cursor-pointer select-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-blue-gray-50 focus:bg-opacity-80 active:bg-blue-gray-50 active:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 active:text-blue-gray-900 outline-none">Profile</Link>
                <hr className="my-3" />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </Navbar>
      </Container>
    </div>
  );
};

export default Header;
