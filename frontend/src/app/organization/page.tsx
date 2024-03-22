"use client";
import useGetAllOrganizations from "@/hooks/useGetAllOrganizations";
import useGetAllUsers from "@/hooks/useGetAllUsers";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Organizations() {
  let { id: userId } = useParams();
  const { organizations } = useGetAllOrganizations();

  const router = useRouter();

  return (
    <div className="bg-gradient-to-r min-h-screen from-blue-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
              Our organizations
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Creator id
                </th>
              </tr>
            </thead>
            <tbody>
              {organizations?.map((org: any) => (
                <tr
                  onClick={() => router.push(`organization/${org.id}`)}
                  key={org.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {org.name}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {org.creator_id}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          className="bg-black text-white px-4 py-2"
          type="button"
          onClick={() => router.push("organization/new")}
        >
          Create organization
        </button>
      </div>
    </div>
  );
}
