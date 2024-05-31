import { apiUrl } from "@/helpers/functions";
import { User } from "@/types";

const getMe = async (token: string) => {
  const url = `${apiUrl}/api/users?token=${token}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await response.json();
  return data;
}

const createUser = async (params: User) => {
  return await fetch(`/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  });
}

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
}

export { getMe, createUser, loginUser };