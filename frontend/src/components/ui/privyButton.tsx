"use client";

import { setCookie } from "@/helper";
import { claims } from "@/sismoConstants";
// react page

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./button";
import { useLogin, usePrivy } from "@privy-io/react-auth";
import { Auth } from "@/utils/auth";

export default function PrivyButton(props: any) {
  const { loading, setLoading } = props;
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const { user, authenticated } = usePrivy();
  const router = useRouter();
  const { login } = useLogin({
    onComplete: (user, isNewUser, wasAlreadyAuthenticated) => {
      console.log(user, isNewUser, wasAlreadyAuthenticated);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const handleLogin = async (signInResult: any) => {
    setUserLoggedIn(true);
    if (authenticated) {
      router.push(`/user/${Auth.getUser}`);
      return;
    }
    login();
  };

  return (
    <Button className="bg-black text-white px-4 py-2 " onClick={handleLogin}>
      Sign in
    </Button>
  );
}
