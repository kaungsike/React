import React from "react";
import { Button, Label, Select, TextInput } from "flowbite-react";

const CheckOutForm = ({ products }) => {
  return (
    <>
      <form className="w-full block mb-7">
        <div className="grid grid-cols-5 items-center gap-3">
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Select Product" />
            </div>
            <Select id="countries" required>
              {products.map(({ id, title }) => (
                <option value={id} key={id}>{title}</option>
              ))}
            </Select>
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="base" value="Quantity" />
            </div>
            <TextInput id="base" type="number" sizing="md" />
          </div>
          <div className="col-span-1">
            <Button className="w-full mt-8">Buy</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckOutForm;
