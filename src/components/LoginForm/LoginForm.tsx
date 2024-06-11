"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import { User } from "@/types";
import { loginUser } from "@/libs/User";

const initialUserState: User = {
  email: "another3@example.com",
  password: "d1r3ctu5",
};

const LoginForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<User>(initialUserState);

  const onChange = ({ target }: { target: HTMLInputElement }) =>
    setFormData({ ...formData, [target.name]: target.value });

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const onSubmit = async (user: User) => {
    await loginUser(user);
    router.push("/profile");
  };

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
