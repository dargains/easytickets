import { apiUrl } from '@/helpers/cmsrequest';
import { User } from '@/types';
import React from 'react'

async function fetchUser(userId: string) {
  const url = `${apiUrl}/api/users/${userId}`;
  const response = await fetch(url);
  const { data } = await response.json();
  return data;
}

const UserDetails = async () => {
  const user: User = await fetchUser("adc22432-de8d-4d88-b19f-f3a63b8fdb29")

  return (
    <div>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
    </div>
  )
}

export default UserDetails