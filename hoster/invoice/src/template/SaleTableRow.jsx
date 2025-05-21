import React from "react";
import { Typography } from "@material-tailwind/react";
import { ButtonGroup, Button } from "@material-tailwind/react";
import { IoTrashOutline } from "react-icons/io5";
import { AiTwotoneEdit } from "react-icons/ai";

const SaleTableRow = ({
  product: { id, product_name, price, created_at, updated_at },
}) => {
  const classes = "p-4 border-b border-blue-gray-50";

  const isoToLocal = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString();
  };

  return (
    <>
      <tr>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {id}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {product_name}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {price}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {isoToLocal(created_at)}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {isoToLocal(updated_at)}
          </Typography>
        </td>
        <td className='p-4 border-b border-blue-gray-50 text-end'>
          <Typography variant="small" color="blue-gray" className="font-normal">
            <ButtonGroup size="sm" variant="text" className="justify-end">
              <Button><AiTwotoneEdit  size={18} /></Button>
              <Button><IoTrashOutline  size={18} className="text-red-500"/></Button>
            </ButtonGroup>
          </Typography>
        </td>
      </tr>
    </>
  );
};

export default SaleTableRow;
