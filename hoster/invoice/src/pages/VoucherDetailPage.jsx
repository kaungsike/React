import React from 'react'
import Container from '../layout/Container'
import Breadcrumb from '../template/Breadcrumb'
import VoucherDetailCard from '../template/VoucherDetailCard'

const VoucherDetailPage = () => {

    const link = [
        {
            path : "/dashboard/vouchers",
            title : "Voucher"
        }
    ]

  return (
    <div className='mt-5'>
        <Container>
            <Breadcrumb currentPage={"Voucher Detail"} link={link}/>
            <VoucherDetailCard/>
        </Container>
    </div>
  )
}

export default VoucherDetailPage