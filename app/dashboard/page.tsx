"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/config/firebaseConfig";
import Sidebar from "@/components/dash/Sidebar";
import HeroSection from "@/components/HeroSection";
import RecentOrders from "@/components/dash/RecentOrders";
import StatsSection from "@/components/dash/StatsSection";

const Dashboard: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await auth.signOut();
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
    <Sidebar />
    <main className="flex-grow p-6">
      <HeroSection />
      <RecentOrders />
      <StatsSection />
    </main>
  </div>
  );
};

export default Dashboard;
