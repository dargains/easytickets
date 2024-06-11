import React from "react";
import LoginForm from "@/components/LoginForm/LoginForm";
import { User } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

const UserLoginPage = () => {
  return (
    <section>
      <h1>Login</h1>
      <LoginForm />
    </section>
  );
};

export default UserLoginPage;
