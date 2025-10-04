import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import ProductEditCart from '../components/ProductEditCard'

const ProductEditPage = () => {
  return (
        <section>
        <Container>
            <Breadcrumb currentPageTitle={"Edit Product"} links={[{title:"Products",url:"/product"}]}/>

            <ProductEditCart/>
        </Container>
    </section>
  )
}

export default ProductEditPage