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
        <label htmlFor="first_name">Primeiro nome</label>
        <input
          type="text"
          id="name"
          name="first_name"
          value={formData.first_name}
          onChange={onChange}
        />
      </div>
      <div>
        <label htmlFor="last_name">Último nome</label>
        <input
          type="text"
          id="name"
          name="last_name"
          value={formData.last_name}
          onChange={onChange}
        />
      </div>
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
      <button onClick={handleSubmit}>registar</button>
    </div>
  );
};

export default SignupForm;
