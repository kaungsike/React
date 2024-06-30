import React, { useContext } from 'react'
import SubHeading from './SubHeading'
import { Button } from 'flowbite-react'
import { HiXMark } from 'react-icons/hi2'
import CreateProductForm from './CreateProductForm'
import { GeneralContext } from '../context/GeneralProvider'

const Drawer = ({products,addProduct}) => {

    const {handleDrawer,openDrawer} =  useContext(GeneralContext);

  return (
    <div className={`fixed z-50 bg-white border border-gray-200 right-0 top-0 w-[320px] p-5 h-screen duration-300 ${!openDrawer && 'translate-x-full'}`}>
        <div className='flex w-full justify-between items-center mb-10'>
            <Button onClick={handleDrawer} className='flex items-center justify-center' size="xs" color="light">
            <HiXMark />
            </Button>
        <SubHeading>Manage Products</SubHeading>
        </div>

        <div className='overflow-y-scroll'>
            {products.map(({id,title,price,stock}) => 
                <div key={id} className='border border-gray-200 flex justify-between items-center py-4 px-2 rounded mb-2'>
                    <p>{title} ({stock})</p>
                    <p>$ {price}</p>
                </div>
            )}
        </div>

        <CreateProductForm addProduct={addProduct}></CreateProductForm>
    </div>
  )
}

export default Drawer