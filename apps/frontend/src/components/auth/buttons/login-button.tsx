"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export default function LoginButton({ mode = "redirect" }: LoginButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (mode === "redirect") {
      router.push("/auth/login");
    }
  };

  if (mode === "modal") {
    // TODO: Implement modal login
    return <span>TODO: Implement modal login</span>;
  }

  return (
    <span className="cursor-pointer" onClick={handleClick}>
      <Button size="sm">Login</Button>
    </span>
  );
}
