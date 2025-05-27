import React from 'react'
import Container from '../layout/Container'
import BreadCrumb from '../components/template/BreadCrumb'
import UserChangeNameForm from '../components/template/UserChangeNameForm'

const UserChangeName = () => {
  return (
    <div className='mt-5'>
        <Container>
            <BreadCrumb link={[{path: '/dashboard/user-profile/', title: 'Profile'}]} currentPage={'Change Name'}/>
            <UserChangeNameForm/>
        </Container>
    </div>
  )
}

export default UserChangeName