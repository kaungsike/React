import React from "react";
import { Typography } from "@material-tailwind/react";
import { ButtonGroup, Button } from "@material-tailwind/react";
import { IoTrashOutline } from "react-icons/io5";
import { AiTwotoneEdit } from "react-icons/ai";
import useRecordsStore from "../store/useRecordsStore";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";

const SaleTableRow = ({
  item: {
    product: { product_name, price },
    created_at,
    quantity,
    product_id,
    cost,
  },
  index,
}) => {

  const {updateQuantity} = useRecordsStore();

  const classes = "p-4 border-b border-blue-gray-50";

  const isoToLocal = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString();
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(product_id,1)
  }

  const handleDecreaseQuantity = () => {
    updateQuantity(product_id,-1)
  }

  return (
    <>
      <tr>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {index + 1}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {product_name}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            $ {price}
          </Typography>
        </td>
        <td className={classes}>
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal text-center flex items-center gap-2"
          >
            <button className="w-[25px] flex items-center justify-center h-[25px]" variant="text" onClick={handleDecreaseQuantity}><FiMinus /></button>
            {quantity}
            <button className="w-[25px] flex items-center justify-center h-[25px]" variant="text" onClick={handleIncreaseQuantity}><FiPlus /></button>
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            $ {cost}
          </Typography>
        </td>
        <td className="p-4 border-b border-blue-gray-50 text-end">
          <Typography variant="small" color="blue-gray" className="font-normal">
            <ButtonGroup size="sm" variant="text" className="justify-end">
              {/* <Button>
                <AiTwotoneEdit size={18} />
              </Button> */}
              <Button className="">
                <IoTrashOutline size={18} className="text-red-500" />
              </Button>
            </ButtonGroup>
          </Typography>
        </td>
      </tr>
    </>
  );
};

export default SaleTableRow;
