import React from 'react'
import Container from '../layout/Container'
import Breadcrumb from '../template/Breadcrumb'
import { ProductTable } from '../template/ProductTable'

const ProductPage = () => {
  return (
    <div className='mt-5'>
        <Container>
            <Breadcrumb currentPage={"Product"}/>
            <ProductTable/>
        </Container>
    </div>
  )
}

export default ProductPage