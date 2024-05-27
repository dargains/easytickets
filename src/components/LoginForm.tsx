"use client";

import React, { useState } from "react";
import { User } from "@/types";

type Props = {
  initialUserState: User;
  onSubmit: (user: User) => void;
};

const SignupForm = ({ initialUserState, onSubmit }: Props) => {
  const [formData, setFormData] = useState<User>(initialUserState);

  const onChange = ({ target }: { target: HTMLInputElement }) =>
    setFormData({ ...formData, [target.name]: target.value });

  const handleSubmit = () => {
    onSubmit(formData);
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

export default SignupForm;
