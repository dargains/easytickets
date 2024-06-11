"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Cookies from "js-cookie";

import { cmsUrl } from "@/helpers/functions";
import { User } from "@/types";
import { useAppContext } from "@/context";
import { getMe } from "@/libs/User";

const UserDetails = () => {
  const router = useRouter();
  // const { token, setToken } = useAppContext();
  const [user, setUser] = useState<User | undefined>(undefined);

  const onLogout = () => {
    router.push("/");
    Cookies.remove("token");
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.push("/login");
    }

    getMe().then((data) => {
      setUser(data);
    });
  }, []);

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
        <p>a carregar...</p>
      )}
      <Link href="/">Back</Link>
    </div>
  );
};

export default UserDetails;
