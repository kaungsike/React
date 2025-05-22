import React from 'react'
import Container from '../layout/Container'
import Breadcrumb from '../template/Breadcrumb'
import ProductEditForm from '../template/ProductEditForm'

const ProductEditPage = () => {

    const link = [
        {
            path : "/dashboard/products",
            title : "Product"
        }
    ]

  return (
    <div className='mt-5'>
        <Container>
            <Breadcrumb currentPage={"Edit Product"} link={link}/>
            <ProductEditForm/>
        </Container>
    </div>
  )
}

export default ProductEditPage