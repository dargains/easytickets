"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useAppContext } from "@/context";
import { apiUrl, cmsUrl } from "@/helpers/functions";
import { User } from "@/types";

const UserDetails = () => {
  const router = useRouter();
  const { token, setToken } = useAppContext();
  const [user, setUser] = useState<User | undefined>(undefined);

  const fetchUser = async (token: string) => {
    const url = `${apiUrl}/api/users?token=${token}`;
    const response = await fetch(url);
    const { data } = await response.json();
    return data;
  };

  const onLogout = () => {
    router.push("/");
    Cookies.remove("token");
    setToken(undefined);
  };

  useEffect(() => {
    if (!token) {
      const newToken = Cookies.get("token");
      if (!newToken) {
        router.push("/user/login");
      } else {
        setToken(JSON.parse(newToken));
      }
    }
  }, []);

  useEffect(() => {
    if (!token) return;
    fetchUser(token.access_token).then((data) => {
      console.log(user);
      setUser(data);
      Cookies.set("user", JSON.stringify(data));
    });
  }, [token]);

  return (
    <div>
      {user ? (
        <div>
          <p>{user.first_name}</p>
          <p>{user.last_name}</p>
          <Image
            src={`${cmsUrl}/assets/${user.avatar}`}
            alt={user.first_name || "avatar"}
            width={200}
            height={200}
          />
          <button onClick={onLogout}>Logout</button>
        </div>
      ) : (
        <div>a carregar...</div>
      )}
    </div>
  );
};

export default UserDetails;
