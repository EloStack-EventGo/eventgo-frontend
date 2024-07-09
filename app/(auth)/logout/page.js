"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("token");
    // Redirect to login page
    router.push("/login");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <p className="text-lg font-medium">Logging out...</p>
    </div>
  );
};

export default Logout;
