"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CustomerTopBar } from "@/components/layout/CustomerTopBar";

export default function NotificationsPage() {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const name = window.sessionStorage.getItem("ecoquickCustomerName");
    if (!name) {
      router.replace("/login");
      return;
    }
    setAllowed(true);
  }, [router]);

  if (!allowed) {
    return null;
  }

  return (
    <div className="page-fade flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <CustomerTopBar />

      <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-8 sm:px-6">
        <h1 className="text-2xl font-black tracking-tight text-primary">
          Notifications
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Your notifications will appear here.
        </p>
      </main>
    </div>
  );
}
