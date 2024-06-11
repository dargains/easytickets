"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie";

import { User } from "@/types";
import { useAppContext } from "@/context";
import { loginUser } from "@/libs/User";

const initialUserState: User = {
  email: "another3@example.com",
  password: "d1r3ctu5",
};

const LoginForm = () => {
  const router = useRouter();
  const { token, setToken } = useAppContext();
  const [formData, setFormData] = useState<User>(initialUserState);

  const onChange = ({ target }: { target: HTMLInputElement }) =>
    setFormData({ ...formData, [target.name]: target.value });

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const onSubmit = async (user: User) => {
    const response = await loginUser(user);
    Cookies.set("token", JSON.stringify(response), {
      expires: response.expires / 86400000,
    });
    setToken(response);
    router.push("/user/details");
  };

  useEffect(() => {
    if (token) {
      router.push("/user/details");
    } else {
      const newToken = Cookies.get("token");
      if (newToken) {
        router.push("/user/details");
      }
    }
  }, []);

  return (
    <div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="name"
          name="email"
          value={formData.email}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={onChange}
        />
      </div>
      <button onClick={handleSubmit}>login</button>
    </div>
  );
};

export default LoginForm;
