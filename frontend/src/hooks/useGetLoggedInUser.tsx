import { getCookie } from "@/helper";
import ApiService from "@/services/ApiService";
import { useState, useEffect } from "react";
export type UserData = {
  id: number;
  wallet_address: string;
  email: string;
  created_at: string;
};

export function useGetUserById(userId: number) {
  const [user, setUser] = useState<UserData | null>(null);
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

  return { user, loading };
}

export default useGetUserById;
