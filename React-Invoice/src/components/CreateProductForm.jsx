import React, { useReducer, useRef } from "react";
import SubHeading from "./SubHeading";
import { Button, Label, TextInput } from "flowbite-react";

const CreateProductForm = ({addProduct}) => {

  const formRef = useRef()

  const handleForm = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    // console.log(formData.get("product_name"))
    // console.log(formData.get("product_price"))
    // console.log(formData.get("product_stock"))

    const newProduct = {
      id : Date.now(),
      title : formData.get("product_name"),
      price : formData.get("product_price"),
      stock : formData.get("product_stock"),
    }

    addProduct(newProduct)

    formRef.current.reset()
  }

  return (
    <div className="bg-white">
      <SubHeading>Add New</SubHeading>
      <form ref={formRef}>
        <div className="grid grid-cols-2 gap-x-3">
          <div  className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" />
            </div>
            <TextInput name='product_name' id="name" type="text" sizing="md" />
          </div>
          <div>
          <div className="mb-2 block">
            <Label htmlFor="price" value="Price" />
          </div>
          <TextInput name="product_price" id="price" type="number" sizing="md" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="stock" value="Stock" />
          </div>
          <TextInput name="product_stock" id="stock" type="number" sizing="md" />
        </div>
        <Button onClick={handleForm} type="submit" className="mt-4 col-span-2">Add</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;
