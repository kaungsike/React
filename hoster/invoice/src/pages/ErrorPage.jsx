import React from 'react'
import Container from '../layout/Container'
import { ErrorPageCard } from '../template/ErrorPageCard'

const ErrorPage = () => {
  return (
    <div className="w-full h-full min-h-screen flex items-center ">
      <Container>
        <ErrorPageCard/>
      </Container>
    </div>
  )
}

export default ErrorPage