import React from "react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { cmsUrl } from "@/helpers/functions";
import { User } from "@/types";
import { getMe, logoutUser } from "@/libs/User";

const UserDetails = async () => {
  const user: User = await getMe();

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
          <form
            action={async () => {
              "use server";
              await logoutUser();
              redirect("/");
            }}
          >
            <button type="submit">Logout</button>
          </form>
        </div>
      ) : (
        <p>a carregar...</p>
      )}
      <Link href="/">Back</Link>
    </div>
  );
};

export default UserDetails;
