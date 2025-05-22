import React from 'react'
import Container from '../layout/Container'
import AddProductForm from '../template/AddProductForm'
import Breadcrumb from '../template/Breadcrumb'

const AddProductPage = () => {

    const link = [
        {
            path : "/dashboard/products",
            title : "Product"
        }
    ]

  return (
    <div className='mt-5'>
        <Container>
            <Breadcrumb link={link} currentPage={"Add Product"}/>
            <AddProductForm/>
        </Container>
    </div>
  )
}

export default AddProductPage