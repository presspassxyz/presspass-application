"use client";
import Providers from "@/components/Providers";
import "./globals.css";
import Topbar from "@/components/shared/Topbar";
import { Auth } from "@/utils/auth";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body>
          {Auth.getUser ? <Topbar /> : null}
          {children}
        </body>
      </Providers>
    </html>
  );
}
