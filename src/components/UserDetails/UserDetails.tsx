import { cmsUrl } from '@/helpers/functions'
import { User } from '@/types'
import React from 'react'
import Image from 'next/image'

const UserDetails = ({ user, onLogout }: { user: User, onLogout: () => void }) => {

  return (
    <div>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
      {
        user.avatar ?
          <Image
            src={`${cmsUrl}/assets/${user.avatar}`}
            alt={user.first_name || "avatar"}
            width={200}
            height={200}
          />
          : ''
      }
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}

export default UserDetails