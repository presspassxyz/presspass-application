"use client";

import useGetUserById from "@/hooks/useGetLoggedInUser";
import Image from "next/image";
import Link from "next/link";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { useState } from "react";

export default function User() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const searchParams = useSearchParams();
  const pathname = usePathname();
  let { id: userId } = useParams();
  console.log("heej", userId);

  const { user } = useGetUserById(Number(userId));

  return (
    <div className="bg-gradient-to-r min-h-screen from-blue-100 to-teal-100">
      <Link href="/" className="absolute px-6 py-3">
        <Image
          src="/assets/logo-name.png"
          alt="logo"
          width={110}
          height={110}
        />
      </Link>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src={`https://api.multiavatar.com/${1}.png`}
          alt="Bordered avatar"
        />
        beeee welcome user
        <p>Wallet address: {user?.wallet_address}</p>
        <p>created at: {user?.created_at}</p>
      </div>
    </div>
  );
}
