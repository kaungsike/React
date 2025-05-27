import React from 'react'
import Container from '../layout/Container'
import Breadcrumb from '../template/Breadcrumb'
import UserChangeImageForm from '../template/UserChangeImageForm'

export const UserChangeImagPage = () => {
  return (
    <div className='mt-5'>
        <Container >
            <Breadcrumb currentPage={"Change Image"}/>
            <UserChangeImageForm/>
        </Container>
    </div>
  )
}
