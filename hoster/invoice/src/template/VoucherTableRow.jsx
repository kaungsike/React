import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { ButtonGroup, Button } from "@material-tailwind/react";
import { IoTrashOutline } from "react-icons/io5";
import { AiTwotoneEdit } from "react-icons/ai";
import { AiOutlineFileSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import useCookie from "react-use-cookie";
import { waveform } from "ldrs";
import { useSWRConfig } from "swr";
import toast from "react-hot-toast";




const VoucherTableRow = ({
  product: {
    voucher_id,
    id,
    customer_name,
    customer_email,
    net_total,
    created_at,
    updated_at,
  },
  showId,
  showCreatedAt,
  showUpdatedAt,
}) => {
  const classes = "p-4 border-b border-blue-gray-50";

    const [token] = useCookie("my_token");

  const { mutate } = useSWRConfig();

    const [loading, setLoading] = useState(false);
  

  

  const isoToLocal = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString();
  };

  const handleDeleteVoucher = async () => {
    setLoading(true);

    const res = await fetch(import.meta.env.VITE_API_URL + "/vouchers/" + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await res.json();

    if (res.status >= 200) {
      toast.success(json.message);
      mutate(import.meta.env.VITE_API_URL + "/vouchers");
    } else {
      toast.error(json.message);
    }

    setLoading(flase);
  };

    waveform.register();
  

  return (
    <>
      <tr>
        {showId && (
          <td className={classes}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {voucher_id}
            </Typography>
          </td>
        )}
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {customer_name}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            {customer_email}
          </Typography>
        </td>
        <td className={classes}>
          <Typography variant="small" color="blue-gray" className="font-normal">
            $ {net_total}
          </Typography>
        </td>
        {showCreatedAt && (
          <td className={classes}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {isoToLocal(created_at)}
            </Typography>
          </td>
        )}
        {showUpdatedAt && (
          <td className={classes}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {isoToLocal(updated_at)}
            </Typography>
          </td>
        )}
        <td className="p-4 border-b border-blue-gray-50 text-end">
          <Typography variant="small" color="blue-gray" className="font-normal">
            <ButtonGroup size="sm" variant="text" className="justify-end">
              <Link
                to={"/dashboard/vouchers/detail/" + id}
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 rounded-r-none border-r-0"
              >
                <AiOutlineFileSearch size={18} />
              </Link>
              <Button onClick={handleDeleteVoucher}>
                {loading ? (
                  <l-waveform
                    size="18"
                    stroke="3.5"
                    speed="1"
                    color="black"
                  ></l-waveform>
                ) : (
                  <IoTrashOutline size={18} className="text-red-500" />
                )}
              </Button>
            </ButtonGroup>
          </Typography>
        </td>
      </tr>
    </>
  );
};

export default VoucherTableRow;
