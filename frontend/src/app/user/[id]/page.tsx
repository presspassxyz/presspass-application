"use client";

import EditUserForm from "@/components/forms/EditUserForm";
import useGetUserById, { UserType } from "@/hooks/useGetUserById";
import ApiService from "@/services/ApiService";
import { Auth } from "@/utils/auth";
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

  const [formData, setFormData] = useState<UserType | null>(null);
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

  console.log(user, "user?");
  return (
    <div className="bg-gradient-to-r min-h-screen from-blue-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {!user ? (
          <p>Loading</p>
        ) : (
          <>
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
                  src={`https://api.multiavatar.com/${user.id}.png`}
                  alt="Bordered avatar"
                />

                <p>Wallet address: {user.wallet_address}</p>
                <p>Created at: {user.created_at}</p>
                <p>ID: {user.id}</p>

                {Number(Auth.getUser) === user.id ? (
                  <button
                    className="bg-black text-white px-4 py-2"
                    type="button"
                    onClick={handleEditClick}
                  >
                    Edit
                  </button>
                ) : null}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
