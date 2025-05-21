import React from "react";
import LoginForm from "../template/LoginForm";
import Container from "../layout/Container";

const LoginPage = () => {
  return (
    <div className="w-full h-full min-h-screen flex items-center ">
      <Container>
        <LoginForm />
      </Container>
    </div>
  );
};

export default LoginPage;
