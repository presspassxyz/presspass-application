import { getCookie } from "@/helper";
import ApiService from "@/services/ApiService";
import { useState, useEffect } from "react";
export interface UserType {
  id: number;
  name: string;
  email: string;
  twitter: string;
  instagram: string;
  bio: string;
  profile_picture: string;
  wallet_address: string;
  created_at: string;
  // Add more fields as needed
}

export function useGetUserById(userId: number) {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!user) {
          setLoading(true);
          const _user = await ApiService.getUser(userId);
          console.log(_user, "heee, wats user?, heej");
          setUser(_user);
          setLoading(false);
        }
      } catch (error) {
        console.log(error, "Error fetching my groups");
      }
    };
    fetchData();
  }, [user]);

  return { user, loading, setUser };
}

export default useGetUserById;
