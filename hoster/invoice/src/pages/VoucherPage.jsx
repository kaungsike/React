import React from 'react'
import Container from '../layout/Container'
import Breadcrumb from '../template/Breadcrumb'
import VoucherTable from '../template/VoucherTable'

const VoucherPage = () => {
  return (
    <div className='mt-5'>
      <Container>
        <Breadcrumb currentPage={"Voucher"}/>
        <VoucherTable/>
      </Container>
    </div>
  )
}

export default VoucherPage