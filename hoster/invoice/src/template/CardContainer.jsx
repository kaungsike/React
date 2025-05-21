import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CardContainer = ({ image, title, description ,href}) => {
  return (
    <Link to={href}>
      <Card className="w-96 shadow-none bg-gray-200">
        <CardHeader
          shadow={false}
          floated={false}
          className="h-56 w-full m-0 bg-gray-200 flex items-center justify-center"
        >
          {image}
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {title}
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {description}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
};

export default CardContainer;
