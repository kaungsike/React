import React, { useRef } from "react";
import { Button, Label, Select, TextInput } from "flowbite-react";

const CheckOutForm = ({ products,addItem }) => {
  

  const selectRef = useRef();
  const quantityRef = useRef();

  const formRef = useRef()

  const handleForm = (e) => {
    e.preventDefault();

    const id = Date.now()

    const currentProduct = products.find((product) => 
      product.id===parseInt(selectRef.current.value)
    );

    const quantity  = parseInt(quantityRef.current.value)
    const cost = (quantity * currentProduct.price).toFixed(2);

    const newItem = {
      id : id,
      product : currentProduct,
      quantity : quantity,
      cost : cost
    }

    addItem(newItem)

    // selectRef.current.;
    formRef.current.reset()

  }


  return (
    <>
      <form ref={formRef} className="w-full block mb-7">
        <div className="grid grid-cols-5 items-center gap-3">
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="countries" value="Select Product" />
            </div>
            <Select ref={selectRef} id="countries" required>
              {products.map(({ id, title }) => (
                <option value={id} key={id}>{title}</option>
              ))}
            </Select>
          </div>
          <div className="col-span-2">
            <div className="mb-2 block">
              <Label htmlFor="base" value="Quantity" />
            </div>
            <TextInput required  ref={quantityRef} id="base" type="number" sizing="md"/>
          </div>
          <div className="col-span-1">
            <Button type="submit" onClick={handleForm} className="w-full mt-8">Buy</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CheckOutForm;
