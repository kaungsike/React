import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import ProductCreateCart from '../components/ProductCreateCart'

const ProductCreatePage = () => {
  return (
    <section>
        <Container>
            <Breadcrumb currentPageTitle={"Create Product"} links={[{title:"Products",url:"/product"}]}/>

            <ProductCreateCart/>
        </Container>
    </section>
  )
}

export default ProductCreatePage