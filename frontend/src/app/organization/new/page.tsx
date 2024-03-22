"use client";

import useGetAllOrganizations from "@/hooks/useGetAllOrganizations";
import { OrganizationType } from "@/hooks/useGetOrganizationById";
import useGetUserById, { UserType } from "@/hooks/useGetUserById";
import ApiService from "@/services/ApiService";
import { Auth } from "@/utils/auth";

import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewOrganization() {
  let { id: organizationId } = useParams();
  const { organizations, setOrganizations } = useGetAllOrganizations();
  const [formData, setFormData] = useState<OrganizationType | null>(null);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData!,
      [name]: value,
    });
  };

  console.log(organizations, "all orgs?");
  const handleSaveClick = async () => {
    if (formData && formData.name) {
      try {
        const response = await ApiService.createOrganization({
          name: formData?.name,
          creator_id: Number(Auth.getUser),
        });
        console.log(response, "wats res?");
        const newOrganization = response.data;
        setOrganizations([...organizations!, newOrganization]);
        setFormData(response.data);
        router.push("/organization");
      } catch (error) {
        console.error("Error updating user data:", error);
      }
    } else {
      //SetError
    }
  };
  return (
    <div className="bg-gradient-to-r min-h-screen from-blue-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <form>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData?.name || ""}
              onChange={handleInputChange}
            />
          </label>
          <br></br> <br></br>
          <button
            className="bg-black text-white px-4 py-2 "
            type="button"
            onClick={handleSaveClick}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
