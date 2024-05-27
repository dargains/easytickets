"use client";
import React from "react";
import Cookies from "js-cookie";
import { User } from "@/types";
import LoginForm from "@/components/LoginForm";
import { useAppContext } from "@/context";
import { redirect, useRouter } from "next/navigation";
import { apiUrl } from "@/helpers/cmsrequest";

const initialUserState: User = {
  email: "another3@example.com",
  password: "d1r3ctu5",
};

const loginUser = async (params: User) => {
  const response = await fetch(`/api/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
  const { data } = await response.json();
  return data;
};

const LoginUser = () => {
  const router = useRouter();
  const { setToken } = useAppContext();

  const onSubmit = async (user: User) => {
    const response = await loginUser(user);
    Cookies.set("token", JSON.stringify(response), {
      expires: response.expires / 86400000,
    });
    setToken(response);
    router.push("/user/details");
  };

  return (
    <section>
      <h1>registo</h1>
      <LoginForm initialUserState={initialUserState} onSubmit={onSubmit} />
    </section>
  );
};

export default LoginUser;
