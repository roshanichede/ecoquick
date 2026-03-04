"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.sessionStorage.removeItem("ecoquickCustomerName");
      window.sessionStorage.removeItem("ecoquickCustomerEmail");
    }
    router.replace("/login");
  }, [router]);

  return null;
}

