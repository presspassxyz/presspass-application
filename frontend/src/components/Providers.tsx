"use client";

import React from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { useRouter } from "next/router";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const router = useRouter();

  const handleLogin = (user: any) => {
    console.log(`User ${user.id} logged in! in Providers.tsx`);
    router.push("/settings");
  };

  return (
    <>
      <PrivyProvider
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
        onSuccess={handleLogin}
        config={{
          embeddedWallets: {
            createOnLogin: "users-without-wallets",
          },
          loginMethods: ["email", "wallet"],
          appearance: {
            theme: "dark",
            accentColor: "#676FFF",
            logo: "https://presspass.vercel.app/images/avatars/avatar-2.webp",
          },
        }}
      >
        {children}
      </PrivyProvider>
    </>
  );
};

export default Providers;
