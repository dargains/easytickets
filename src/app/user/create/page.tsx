"use client";

import React, { useState } from "react";
import SignupForm from "@/components/SignupForm";
import { User } from "@/types";

const initialUserState: User = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  role: "b110cd8b-96ad-40c9-a828-76a31c97772b",
};

const createUser = async (params: User) => {
  return await fetch(`/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
};

const CreateUser = () => {
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

export default CreateUser;
