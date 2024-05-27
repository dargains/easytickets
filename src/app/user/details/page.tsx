"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useAppContext } from "@/context";
import { apiUrl, cmsUrl } from "@/helpers/cmsrequest";
import { User } from "@/types";
import Image from "next/image";

const UserDetails = () => {
  const { token, setToken } = useAppContext();
  const [user, setUser] = useState<User | undefined>(undefined);

  async function fetchUser(token: string) {
    const url = `${apiUrl}/api/users?token=${token}`;
    const response = await fetch(url);
    const { data } = await response.json();
    return data;
  }

  useEffect(() => {
    if (!token) {
      const newToken = Cookies.get("token");
      console.log("usou o cookie", newToken);
      setToken(newToken);
    }
  }, []);

  useEffect(() => {
    if (!token) return;
    console.log("fetching user", token);
    fetchUser(token.access_token).then((data) => {
      console.log(user);
      setUser(data);
      Cookies.set("user", JSON.stringify(data));
    });
  }, [token]);

  return (
    <div>
      <p>{token}</p>
      {user ? (
        <div>
          <p>{JSON.stringify(user, null, 6)}</p>
          <p>{user.first_name}</p>
          <p>{user.last_name}</p>
          <Image
            src={`${cmsUrl}/assets/${user.avatar}`}
            alt={user.first_name}
            width={300}
            height={200}
          />
        </div>
      ) : (
        <div>a carregar...</div>
      )}
    </div>
  );
};

export default UserDetails;
