import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <h1>Easytickets</h1>

      <ul>
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