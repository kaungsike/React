import React from 'react'
import Container from '../layout/Container'
import useCookie from 'react-use-cookie'
import BreadCrumb from '../components/template/BreadCrumb'
import UserProfileCard from '../components/template/UserProfileCard'

const UserProfilePage = () => {

    const [userCookie] = useCookie('user')

    const userObj = JSON.parse(userCookie)

    console.log(userObj);

  return (
    <div className='mt-5'>
        <Container>
            <BreadCrumb currentPage={"Profile"}/>
            <UserProfileCard/>
        </Container>

    </div>
  )
}

export default UserProfilePage