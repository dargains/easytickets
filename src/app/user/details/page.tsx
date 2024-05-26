import { fetchWrapper } from '@/helpers/cmsrequest';
import { User } from '@/types';
import React from 'react'

async function getData(userId: string) {
  return await fetchWrapper('/users/' + userId)
}

const UserDetails = async () => {
  const user: User = await getData("adc22432-de8d-4d88-b19f-f3a63b8fdb29")

  return (
    <div>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
    </div>
  )
}

export default UserDetails