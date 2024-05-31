import React from 'react'
import Link from 'next/link'
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <h1><Link href="/">Easytickets</Link></h1>

      <ul className={styles.navList}>
        <li>
          <Link href="/user/create">registo</Link>
        </li>
        <li>
          <Link href="/user/details">detalhes</Link>
        </li>
        <li>
          <Link href="/user/login">login</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header