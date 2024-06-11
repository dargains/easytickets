import { apiUrl } from "@/helpers/functions";
import { User } from "@/types";
import { cookies } from "next/headers";

const getMe = async () => {
  const token = cookies().get("token")?.value;
  if (!token) {
    throw new Error("No token found");
  }
  const { access_token } = JSON.parse(token);
  const response = await fetch(`${apiUrl}/api/users`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get user profile");
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

const loginUser = async (formData: FormData) => {
  const params = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const response = await fetch(`${apiUrl}/api/auth`, {
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

  cookies().set("token", JSON.stringify(data), {
    expires: new Date(Date.now() + data.expires),
    secure: true,
    httpOnly: true,
  });

  return;
};

const logoutUser = async () => {
  cookies().set("token", "", { expires: new Date(0) });
  return;
};

export { getMe, createUser, loginUser, logoutUser };
