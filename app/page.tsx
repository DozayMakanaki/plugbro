"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Home from "@/app/Home/pages";

const App: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/"); // Navigates to the home route programmatically
  }, [router]);

  return <Home />;
};

export default App;
