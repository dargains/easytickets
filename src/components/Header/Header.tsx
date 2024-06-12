import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { cookies } from "next/headers";

const Header = async () => {
  const isAuth = cookies().get("token")?.value;
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
