import ApiService from "@/services/ApiService";
import { useState, useEffect } from "react";
import { UserData } from "./useGetUserById";

export function useGetAllUsers() {
  const [users, setUsers] = useState<UserData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!users) {
          setLoading(true);
          const _user = await ApiService.getAllUsers();
          setUsers(_user);
          setLoading(false);
        }
      } catch (error) {
        console.log(error, "Error fetching my groups");
      }
    };
    fetchData();
  }, [users]);

  return { users, loading, setUsers };
}

export default useGetAllUsers;
