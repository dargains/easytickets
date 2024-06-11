import React from "react";
import { Metadata } from "next";

import SignupForm from "@/components/SignupForm/SignupForm";

export const metadata: Metadata = {
  title: "Registo",
};

const UserCreatePage = () => {
  return (
    <section>
      <h1>Registo</h1>
      <SignupForm />
    </section>
  );
};

export default UserCreatePage;
