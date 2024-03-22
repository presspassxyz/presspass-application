"use client";

import { UserType } from "@/hooks/useGetUserById";
import ApiService from "@/services/ApiService";
import { useParams } from "next/navigation";
import { useState } from "react";

interface EditUserFormProps {
  setIsEditing: (bool: boolean) => void;
  user: UserType;
  setUser: (user: UserType) => void;
}

function EditUserForm(props: EditUserFormProps) {
  const { setIsEditing, user, setUser } = props;
  let { id: userId } = useParams();

  const [formData, setFormData] = useState<UserType | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData!,
      [name]: value,
    });
  };

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
    <form>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData?.name || user?.name}
          onChange={handleInputChange}
        />
      </label>
      <br></br>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData?.email || user?.email}
          onChange={handleInputChange}
        />
      </label>
      <br></br>
      <label>
        Twitter:
        <input
          type="text"
          name="twitter"
          value={formData?.twitter || user?.twitter}
          onChange={handleInputChange}
        />
      </label>
      <br></br>
      <label>
        Instagram:
        <input
          type="text"
          name="instagram"
          value={formData?.instagram || user?.instagram}
          onChange={handleInputChange}
        />
      </label>
      <br></br>
      <label>
        Bio:
        <textarea
          name="bio"
          value={formData?.bio || user?.bio}
          onChange={handleInputChange}
        />
      </label>
      <br></br>
      <label>
        Profile Picture:
        <input
          type="text"
          name="profile_picture"
          value={formData?.profile_picture || user?.profile_picture}
          onChange={handleInputChange}
        />
      </label>
      <br></br>
      <br></br>

      <button
        className="bg-black text-white px-4 py-2 "
        type="button"
        onClick={handleSaveClick}
      >
        Save
      </button>
    </form>
  );
}

export default EditUserForm;
