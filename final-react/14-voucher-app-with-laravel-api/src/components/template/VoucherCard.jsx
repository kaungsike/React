import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import Voucher_Card_Row from "../ui/voucher_card_row";
import printJS from "print-js";

export default function VoucherCard() {
  const { id } = useParams();

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + "/vouchers/" + id,
    fetcher
  );

  !isLoading && console.log(data);

  const handlePrintBtn = () => {
    printJS({
        printable: "printArea",
        type: "html",
        targetStyles: ["*"],
        style: `
          @media print {
            body {
              margin: 0;
              padding: 0;
            }
            #printArea {
              width: 100%;
              height: 100%;
              overflow: hidden;
            }
          }
        `
    })
  }

  const handleExportToPTFBtn = () => {
    const opt = {
      margin: 0.5,
      filename: 'invoice.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'cm', format: 'a5', orientation: 'portrait' },
    };
  
    const element = document.getElementById('printArea');
  
    if (window.html2pdf && element) {
      window.html2pdf().set(opt).from(element).save();
    } else {
      alert("html2pdf failed to load.");
    }
    console.log(element);
  };
  

  return (
    <>
      {!isLoading && (
        <div id="printArea" className="lg:w-[14.8cm] w-full h-[21cm] bg-white border-none dark:bg-background">
          <Card className="w-full h-full bg-background shadow-none p-0 border-none">
            <CardHeader className="flex flex-row justify-between items-start p-0">
              <div>
                <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Invoice ID
                </h1>
                <p className="text-gray-700 dark:text-gray-300">
                  {data.voucherId}
                </p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-700 dark:text-gray-300">
                  Invoice to
                </p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {data.customerName}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Date: {data.saleDate}
                </p>
              </div>
            </CardHeader>

            <CardContent className="space-y-4 p-0 overflow-visible">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="overflow-visible">
                  {data.records.map((item) => (
                    <Voucher_Card_Row key={item.id} voucher={item} />
                  ))}
                </TableBody>
              </Table>

              <div className="flex flex-col items-end space-y-1.5 text-gray-900 dark:text-white">
                <div className="flex justify-between w-40">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">$ {data.total}</span>
                </div>
                <div className="flex justify-between w-40">
                  <span className="font-medium">Tax</span>
                  <span className="font-medium">$ {data.tax}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between w-40">
                  <span className="font-medium">Net Total</span>
                  <span className="font-medium">$ {data.grandTotal}</span>
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Payment Transfer to
                </h3>
                <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <p>Method - Account</p>
                  <p>Method - Account</p>
                  <p>Method - Account</p>
                </div>

                <div className="pt-2">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                    Company Name
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Company Address
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Phone
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Email
                  </p>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-center pt-4 pb-2">
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                Thanks to You
              </p>
            </CardFooter>
          </Card>
        </div>
      )}
      <div className="flex justify-center mt-5 flex-col gap-5">
        <img src="../thanks.svg" className="w-[200px] lg:w-[400px]" alt="" />
        <div className="flex items-center justify-center space-x-2">
        <Button onClick={handlePrintBtn}>Print</Button>
        </div>
      </div>
    </>
  );
}
