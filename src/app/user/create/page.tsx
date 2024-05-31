"use client";

import React, { useState } from "react";
import SignupForm from "@/components/SignupForm";
import { User } from "@/types";
import { createUser } from "@/libs/User";

const initialUserState: User = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  role: "b110cd8b-96ad-40c9-a828-76a31c97772b",
};

const UserCreatePage = () => {
  const [hasError, setHasError] = useState(false);

  const onSubmit = async (userInfo: User) => {
    setHasError(false);
    const response = await createUser(userInfo);
    if (!response.ok) {
      const responseText = await response.text();
      setHasError(true);
      throw new Error(responseText);
    }
    const { data } = await response.json();
    return data;
  };

  return (
    <section>
      <h1>registo</h1>
      <SignupForm initialUserState={initialUserState} onSubmit={onSubmit} />
      {hasError ? <p>ocorreu um erro</p> : ""}
    </section>
  );
};

export default UserCreatePage;
