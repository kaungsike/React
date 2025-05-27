import React from 'react'
import Container from '../layout/Container'
import Breadcrumb from '../template/Breadcrumb'
import UserChangeNameForm from '../template/UserChangeName'

const UserChangeNamePage = () => {
  return (
    <div className='mt-5'>
        <Container>
            <Breadcrumb currentPage={"Change Name"}/>
            <UserChangeNameForm/>
        </Container>
    </div>
  )
}

export default UserChangeNamePage