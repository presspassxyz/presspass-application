"use client";

import { Button } from "@/components/ui/button";
import PrivyButton from "@/components/ui/privyButton";
import { getCookie } from "@/helper";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HashLoader } from "react-spinners";

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-screen h-screen circles">
      <nav className="topbar px-5 py-5">
        <div className="flex items-center gap-1">
          <div className="block md:hidden"></div>
        </div>

        <div></div>
      </nav>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        {loading ? (
          <h1 className="font-semibold text-5xl text-center blue-text-gradient">
            <HashLoader
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full"
              color="000000"
            />
          </h1>
        ) : (
          <div>
            {" "}
            <h1 className="mt-4 text-2xl text-center">GET YOUR PRESS PASS</h1>
            <h2 className="mt-4 text-center">
              Tired of getting impersonated and your Identity being used to
              phish/scam people ? Get your PressPass. An open, free, attestation
              of your credentials at work.
            </h2>
            <div className="mt-4"></div>
            <h3 className="font-semibold text-2xl text-center text-black"></h3>
            <div className="mt-4"></div>
            <div className="flex justify-center">
              <PrivyButton loading={loading} setLoading={setLoading} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
