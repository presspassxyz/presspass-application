"use client";

import useGetOrganizationById from "@/hooks/useGetOrganizationById";
import useGetUserById, { UserType } from "@/hooks/useGetUserById";

import { useParams } from "next/navigation";

export default function Organization() {
  let { id: organizationId } = useParams();
  console.log("heej", organizationId);

  const { organization } = useGetOrganizationById(Number(organizationId));

  return (
    <div className="bg-gradient-to-r min-h-screen from-blue-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3>Organization Page</h3>
        <p>Name: {organization?.id}</p>
        <p>CreatorID: {organization?.creator_id}</p>
      </div>
    </div>
  );
}
