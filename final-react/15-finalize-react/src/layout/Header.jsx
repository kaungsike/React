import React, { useState } from "react";
import Container from "./Container";
import { Button } from "@/components/ui/button";

import "ldrs/react/DotPulse.css";
import { Link, useNavigate } from "react-router-dom";
import useCookie, { removeCookie } from "react-use-cookie";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useUserStore from "../store/useUserStore";

const Header = () => {
  const [userCookie] = useCookie("user");

  const [menuOpen, setMenuOpen] = useState(false);

  const { user } = useUserStore();

  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie("my_token");
    navigate("/");
  };

  const userObj = JSON.parse(userCookie);

  return (
    <div className="border-b bg-background border-border">
      <Container>
        <div className="w-full flex items-center justify-between py-4">
          <div>
            <h1 className="text-2xl font-bold dark:text-white">Invoice App</h1>
          </div>
          <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
            <DropdownMenuTrigger className="px-1">
              <img
                className="w-[40px] h-[40px] rounded-full "
                src={
                  user?.profile_image
                    ? `${user.profile_image}`
                    : "https://static.thenounproject.com/png/4530368-200.png"
                }
                alt=""
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link
                to={`/dashboard/user-profile`}
                className="w-full font-[14px] text-white bg-zinc-900 dark:bg-zinc-100 dark:text-black rounded-md flex items-center justify-center gap-2 h-[36px] mb-1"
              >
                {" "}
                Profile
              </Link>
              <Button
                type="button"
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2"
              >
                Logout
              </Button>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </Container>
    </div>
  );
};

export default Header;
