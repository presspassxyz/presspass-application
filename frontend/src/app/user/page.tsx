"use client";

import { useParams } from "next/navigation";

export default function Users() {
  let { id: userId } = useParams();
  console.log("heej", userId);

  return (
    <div className="bg-gradient-to-r min-h-screen from-blue-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        USERS HERE
      </div>
    </div>
  );
}
