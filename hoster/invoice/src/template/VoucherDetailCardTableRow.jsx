import React from "react";

const VoucherDetailCardTableRow = ({record : {quantity,cost,product : {product_name,price,}}}) => {
  return (
    <tr className="border-b">
      <td className="flex items-center gap-2 py-2">
{product_name}
      </td>
      <td className="text-center">{quantity}</td>
      <td className="text-end"> {price}</td>
      <td className="text-end"> {cost}</td>
    </tr>
  );
};

export default VoucherDetailCardTableRow;
