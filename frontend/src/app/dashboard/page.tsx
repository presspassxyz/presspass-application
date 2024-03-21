import { redirect, useRouter } from "next/navigation";

async function Dashboard() {
  return (
    <div className="bg-gradient-to-r min-h-screen from-blue-100 to-teal-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div>
          Dashboard
          <br></br>
          <a
            href={"/organization"}
            /*  onClick={() => router.push("/organization")} */
            className="bg-black text-white px-4 py-2 mb-5 "
            type="button"
          >
            Go to organizations
          </a>
          <br></br>
          <a
            href={"/user"}
            /*  onClick={() => router.push("/user")} */
            className="bg-black text-white px-4 py-2 "
            type="button"
          >
            Go to users
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
