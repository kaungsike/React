import React from 'react'
import Container from '../layout/Container'
import Breadcrumb from '../template/Breadcrumb'
import UserProfileCard from '../template/UserProfileCard'

const UserProfilePage = () => {
  return (
    <div className='mt-5'>
        <Container>
            <Breadcrumb currentPage={"Profile"}/>
            <UserProfileCard/>
        </Container>
    </div>
  )
}

export default UserProfilePage