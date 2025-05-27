import React from 'react'
import Container from '../layout/Container'
import BreadCrumb from '../components/template/BreadCrumb'
import UserChangeImageForm from '../components/template/UserChangeImageForm'

const UserChangeImage = () => {
  return (
    <div className='mt-5'>
        <Container>
            <BreadCrumb  link={[{path: '/dashboard/user-profile/', title: 'Profile'}]} currentPage={'Change Image'}/>
            <UserChangeImageForm/>
        </Container>
    </div>
  )
}

export default UserChangeImage