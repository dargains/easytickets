import React from "react";
import { redirect } from "next/navigation";

import { User } from "@/types";
import { loginUser } from "@/libs/User";

const initialUserState: User = {
  email: "another3@example.com",
  password: "d1r3ctu5",
};

const LoginForm = () => {
  return (
    <form
      action={async (formData) => {
        "use server";
        await loginUser(formData);
        redirect("/profile");
      }}
    >
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="name"
          name="email"
          defaultValue={initialUserState.email}
        />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          defaultValue={initialUserState.password}
        />
      </div>
      <button type="submit">login</button>
    </form>
  );
};

export default LoginForm;
