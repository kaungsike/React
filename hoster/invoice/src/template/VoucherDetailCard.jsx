import { Button } from "@material-tailwind/react";
import React from "react";
import { useParams } from "react-router-dom";
import useCookie from "react-use-cookie";
import useSWR from "swr";
import PaginationVoucherDetail from "../animation/PaginationVoucherDetail";
import VoucherDetailCardTableRow from "./VoucherDetailCardTableRow";
import { AiOutlineFilePpt } from "react-icons/ai";
import printJS from "print-js";
import html2pdf from "html2pdf.js";

const VoucherDetailCard = () => {
  const [token] = useCookie("my_token");

  const { id } = useParams();

  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((r) => r.json());

  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/vouchers/" + id,
    fetcher
  );

  const handlePrintBtn = () => {
    printJS({
      printable: "voucher",
      type: "html",
      targetStyles: ["*"],
    });
  };

  const handleDownloadAndPrint = () => {
    const element = document.getElementById("voucher");

    html2pdf()
      .from(element)
      .set({
        margin: 0.5,
        filename: "voucher.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .save()
      .then(() => {
        printJS({
          printable: "voucher-print",
          type: "html",
          targetStyles: ["*"],
        });
      });
  };

  return (
    <>
      <div className="flex mt-5 flex-col md:flex-row w-full md:gap-5 gap-3">
        {isLoading ? (
          <PaginationVoucherDetail />
        ) : (
          <div
            id="voucher"
            className="w-full max-w-[794px] mx-auto bg-white border rounded-2xl p-6 space-y-6 print:max-w-full print:shadow-none print:border-none print:rounded-none"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {data?.data.voucher_id}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
              <div>
                <p className="font-medium text-gray-700">Sale date</p>
                <p>{data?.data.sale_date}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Customer Name</p>
                <p>{data?.data.customer_name}</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Currency</p>
                <p>USD – US Dollar</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Customer Email</p>
                <p>{data?.data.customer_email}</p>
              </div>
            </div>
            <div className="overflow-x-auto print:overflow-visible">
              <table className="w-full text-sm text-left print:text-xs print:w-full print:table-auto border-collapse">
                <thead className="border-b text-gray-500">
                  <tr>
                    <th className="py-2 text-left">Description</th>
                    <th className="text-center">Qty</th>
                    <th className="text-right">$ Price</th>
                    <th className="text-right">$ Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data.records.map((record) => (
                    <VoucherDetailCardTableRow
                      record={record}
                      key={record.id}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-sm text-right space-y-1 print:text-xs">
              <div className="flex justify-end gap-8 print:gap-4">
                <p className="tezt-nowrap w-[100px] text-end ">Tax 0.2%</p>
                <p className="tezt-nowrap  text-end ">{data?.data.tax}</p>
              </div>
              <div className="flex justify-end gap-8 font-semibold text-gray-800 print:gap-4">
                <p className="tezt-nowrap w-[100px] text-end ">Total</p>
                <p className="tezt-nowrap text-end ">{data?.data.total}</p>
              </div>
              <div className="flex justify-end gap-8 font-semibold text-gray-800 print:gap-4">
                <p className="tezt-nowrap w-[100px] text-end ">$ Net Total</p>
                <p className="tezt-nowrap text-end ">{data?.data.net_total}</p>
              </div>
            </div>
          </div>
        )}

        <div className="w-full md:w-[50%] bg-white  rounded-2xl p-6 space-y-6">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Attachment</p>
            <div className="flex w-full gap-3 felx-col md:flex-row">
              <Button
                onClick={handlePrintBtn}
                variant="outlined"
                className="flex items-center gap-2"
              >
                Print
                <AiOutlineFilePpt size={20} />
              </Button>
              <div className="flex items-center w-full justify-between p-3 border rounded-md text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  {/* <FileText className="text-gray-500" size={18} /> */}
                  <div>
                    <p>Product list.PDF</p>
                  </div>
                </div>
                <Button
                  variant="text"
                  onClick={handleDownloadAndPrint}
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VoucherDetailCard;
