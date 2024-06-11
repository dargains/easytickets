"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import styles from "./Header.module.css";

const Header = () => {
  const [isAuth, setisAuth] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setisAuth(true);
    }
  }, []);

  return (
    <header className={styles.container}>
      <h1>
        <Link href="/">Easytickets</Link>
      </h1>

      <ul className={styles.navList}>
        {isAuth ? (
          <>
            <li>
              <Link href="/profile">perfil</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/register">registo</Link>
            </li>
            <li>
              <Link href="/login">login</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
