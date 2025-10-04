import React from 'react'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'
import SaleList from '../components/SaleList'

const SalePage = () => {
  return (
        <section>
        <Container>
            <Breadcrumb currentPageTitle={"Sale"}/>
            <SaleList/>
        </Container>
    </section>
  )
}

export default SalePage