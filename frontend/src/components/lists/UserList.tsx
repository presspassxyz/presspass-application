"use client";

import { useEffect, useState } from "react";
import UserCard from "../cards/UserCard";
import SkeletonLoading from "../ui/SkeletonLoading";

interface UserData {
  username: string;
  vaultId: string;
}

const UserList = () => {
  const [users, setUsers] = useState<UserData[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <SkeletonLoading />
      ) : users ? (
        users.map((user) => (
          <UserCard
            key={user.vaultId}
            vaultid={user.vaultId}
            username={user.username}
          />
        ))
      ) : (
        <p className="no-result mt-5">No Result</p>
      )}
    </div>
  );
};

export default UserList;
