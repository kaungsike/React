import React from 'react'
import Container from '../layout/Container'
import Breadcrumb from '../template/Breadcrumb'
import SaleForm from '../template/SaleForm'
import { SaleTable } from '../template/SaleTable'

const SalePage = () => {
  return (
    <div className='mt-5'>
      <Container>
        <Breadcrumb currentPage={"Sale"} />
        <SaleForm/>
        <div>
          <SaleTable/>
          
        </div>
      </Container>
    </div>
  )
}

export default SalePage