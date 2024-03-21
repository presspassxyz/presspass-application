"use client";
import useGetAllUsers from "@/hooks/useGetAllUsers";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Users() {
  let { id: userId } = useParams();
  console.log("heej", userId);
  const { users, setUsers } = useGetAllUsers();
  const router = useRouter();

  return (
    <div className="bg-gradient-to-r min-h-screen from-blue-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Our users
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Wallet address
                </th>
                <th scope="col" className="px-6 py-3">
                  Instagram
                </th>
                <th scope="col" className="px-6 py-3">
                  Bio
                </th>
                <th scope="col" className="px-6 py-3">
                  Profile Picture
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user: any) => (
                <tr
                  onClick={() => router.push(`user/${user.id}`)}
                  key={user.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-black">{user.email ?? "IG"}</td>
                  <td className="px-6 py-4  text-black">
                    {user.wallet_address.slice(0, 20) + "..." ?? "IG"}
                  </td>
                  <td className="px-6 py-4  text-black">
                    {user.instagram ?? "IG"}
                  </td>
                  <td className="px-6 py-4  text-black">{user.bio ?? "IG"}</td>
                  <td className="px-6 py-4  text-black">
                    <img
                      src={user.profile_picture}
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4 text-right"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
