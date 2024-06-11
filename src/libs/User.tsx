import { apiUrl } from "@/helpers/functions";
import { User } from "@/types";

const getMe = async () => {
  const response = await fetch(`${apiUrl}/api/users`);
  console.log(response);
  if (!response.ok) {
    throw new Error("Failed to get user details");
  }

  const { data } = await response.json();

  return data;
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

const loginUser = async (params: User) => {
  const response = await fetch(`/api/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error("Failed to login user");
  }
  const { data } = await response.json();
  return data;
};

export { getMe, createUser, loginUser };
