import React from "react";
import SubHeading from "./SubHeading";
import { Button, Label, TextInput } from "flowbite-react";

const CreateProductForm = () => {
  return (
    <div>
      <SubHeading>Add New</SubHeading>
      <form>
        <div className="grid grid-cols-2 gap-x-3">
          <div  className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput id="name" type="text" sizing="md" />
          </div>
          <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Price" />
          </div>
          <TextInput id="price" type="number" sizing="md" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="stock" value="Stock" />
          </div>
          <TextInput id="stock" type="number" sizing="md" />
        </div>
        <Button className="mt-4 col-span-2">Add</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;
