import React from "react";
import { Typography } from "@material-tailwind/react";
import Container from "./Container";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-auto">
      <Container>
        <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
          <Typography color="blue-gray" className="font-normal">
            API by <a href="https://mms-it.com/" className="underline text-blue-500">MMSIT</a>
          </Typography>
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="https://github.com/kaungsike"
                color="blue-gray"
                className="font-normal flex items-center gap-2 transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Develop by me<FaGithub />
              </Typography>
            </li>
          </ul>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
