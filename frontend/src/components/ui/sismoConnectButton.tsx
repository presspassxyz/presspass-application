"use client";

import { setCookie } from "@/helper";
import { claims } from "@/sismoConstants";
// react page

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./button";
import { useLogin, usePrivy } from "@privy-io/react-auth";

export default function SismoButton(props: any) {
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
      router.push("/user/:id");
      return;
    }

    login();
  };
  return <Button onClick={handleLogin}>Sign in</Button>;
}
