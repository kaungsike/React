import React from 'react'
import Container from '../layout/Container'
import BreadCrumb from '../components/template/BreadCrumb'
import UserChangePasswordForm from '../components/template/UserChangePasswordForm'

const UserChangePassword = () => {
  return (
    <div className='mt-5'>
        <Container>
            <BreadCrumb  link={[{path: '/dashboard/user-profile/', title: 'Profile'}]} currentPage={'Change Password'}/>
            <UserChangePasswordForm/>
        </Container>
    </div>
  )
}

export default UserChangePassword