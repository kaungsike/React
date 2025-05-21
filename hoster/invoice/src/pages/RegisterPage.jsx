import React from "react";
import RegisterForm from "../template/RegisterForm";
import Container from "../layout/Container";

const RegisterPage = () => {
  return (
    <div className="w-full h-full min-h-screen flex items-center ">
      <Container>
        <RegisterForm />
      </Container>
    </div>
  );
};

export default RegisterPage;
