"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cookies from "js-cookie";
import { useAppContext } from "@/context";
import { User } from "@/types";
import { getMe } from "@/libs/User";
import UserDetails from "@/components/UserDetails/UserDetails";

const UserDetailsPage = () => {
  const router = useRouter();
  const { token, setToken } = useAppContext();
  const [user, setUser] = useState<User | undefined>(undefined);

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
    getMe(token.access_token).then((data) => {
      setUser(data);
      Cookies.set("user", JSON.stringify(data));
    });
  }, [token]);

  return (
    <div>
      {user ? (
        <UserDetails user={user} onLogout={onLogout} />
      ) : (
        <p>a carregar...</p>
      )}
      <Link href="/">Back</Link>
    </div>
  );
};

export default UserDetailsPage;
