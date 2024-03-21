"use client";

import useGetUserById, { UserData } from "@/hooks/useGetUserById";

import { useParams } from "next/navigation";

export default function Organization() {
  let { id: organizationId } = useParams();
  console.log("heej", organizationId);

  const { user, setUser } = useGetUserById(Number(organizationId));

  return (
    <div className="bg-gradient-to-r min-h-screen from-blue-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Organization by id
      </div>
    </div>
  );
}
