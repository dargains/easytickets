import { Festival, User } from '@/types';
import React from 'react'
import Image from 'next/image';
import { cmsUrl } from '@/helpers/functions';
import Link from 'next/link';

const FestivalDetails = ({ festival, hasGoers }: { festival: Festival, hasGoers: boolean }) => {
  return (
    <div>
      <h2>{festival.name}</h2>
      <p>{festival.date}</p>
      <p>{festival.location}</p>
      <Image
        src={`${cmsUrl}/assets/${festival.image}`}
        alt={festival.name}
        width={300}
        height={200}
      />
      {
        hasGoers ?
          <>
            <p>goers</p>
            {festival.goers.map(
              ({
                directus_users_id: { first_name, last_name, id },
              }: {
                directus_users_id: User;
              }) => (
                <p key={id}>
                  <Link href={`/goer/${id}`} key={id}>
                    {first_name} {last_name}
                  </Link>
                </p>
              )
            )}</> : ''
      }
    </div>
  )
}

export default FestivalDetails