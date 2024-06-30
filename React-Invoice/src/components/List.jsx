import { Button, Table } from "flowbite-react";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { HiMiniPlusSmall, HiMinusSmall, HiOutlineTrash } from "react-icons/hi2";
import Swal from "sweetalert2";
import { GeneralContext } from "../context/GeneralProvider";

const List = ({ item }) => {
  const { updateItemQuantity, removeItem, items } = useContext(GeneralContext);

  const handleDelBtn = () => {
    console.log(item.id);
    Swal.fire({
      // title: "Are you sure?",
      text: "Are you sure you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0E7490",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(item.id);
        toast.success("Successfully Deleted!");
      }
    });
  };

  const handleAddQuantity = () => {
    updateItemQuantity(item.id, 1);
  };

  const handleSubQuantity = () => {
    if (item.quantity > 1) {
      updateItemQuantity(item.id, -1);
    } else {
      toast.error("Can't Reduce Quantity!");
    }
  };

  return (
    // <div>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {item.product.title}
        </Table.Cell>
        <Table.Cell className="text-end">{item.product.price}</Table.Cell>
        <Table.Cell className="text-end">
          <div className="flex justify-end items-center gap-1">
            <Button onClick={handleAddQuantity} size="xs" color="light">
              <HiMiniPlusSmall />
            </Button>
            <span>{item.quantity}</span>
            <Button onClick={handleSubQuantity} size="xs" color="light">
              <HiMinusSmall />
            </Button>
          </div>
        </Table.Cell>
        <Table.Cell className="text-end">{item.cost}</Table.Cell>
        <Table.Cell>
          <button
            onClick={handleDelBtn}
            href="#"
            className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          >
            <HiOutlineTrash />
          </button>
        </Table.Cell>
      </Table.Row>
    // </div>
  );
};

export default List;
