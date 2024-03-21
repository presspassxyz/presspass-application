"use client";

import EditUserForm from "@/components/forms/EditUserForm";
import useGetUserById, { UserData } from "@/hooks/useGetUserById";
import ApiService from "@/services/ApiService";
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
  let { id: userId } = useParams();
  console.log("heej", userId);

  const { user, setUser } = useGetUserById(Number(userId));

  const [formData, setFormData] = useState<UserData | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData!,
      [name]: value,
    });
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };

  console.log("UUUSER:", user);

  const handleSaveClick = async () => {
    try {
      const response = await ApiService.updateUser(Number(userId), formData);
      console.log(response, "wats res?");
      setUser(response.data);
      setFormData(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  return (
    <div className="bg-gradient-to-r min-h-screen from-blue-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {isEditing && user ? (
          <EditUserForm
            setIsEditing={setIsEditing}
            user={user}
            setUser={setUser}
          />
        ) : (
          <div>
            <img
              className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src={`https://api.multiavatar.com/${1}.png`}
              alt="Bordered avatar"
            />

            <p>Wallet address: {user?.wallet_address}</p>
            <p>created at: {user?.created_at}</p>

            <button
              className="bg-black text-white px-4 py-2 "
              type="button"
              onClick={handleEditClick}
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
