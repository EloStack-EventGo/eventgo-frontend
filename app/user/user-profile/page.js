"use client";
import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation"; // Comment out the useRouter import

const UserProfile = () => {
  const [user, setUser] = useState(null);
  // const router = useRouter(); // Comment out the useRouter hook

  useEffect(() => {
    // Temporarily bypass authentication check for testing
    // const token = localStorage.getItem("token");
    // if (!token) {
    //   router.push("/auth/login");
    //   return;
    // }

    // Hardcode user data for testing
    const userData = {
      name: "John Doe",
      email: "john.doe@example.com",
    };
    setUser(userData);

    // Fetch user profile data from your backend (adjust URL as necessary)
    // const fetchUserProfile = async () => {
    //   try {
    //     const response = await fetch("http://localhost:8888/user-profile", {
    //       method: "GET",
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     });

    //     if (!response.ok) {
    //       throw new Error("Failed to fetch user profile");
    //     }

    //     const userData = await response.json();
    //     setUser(userData);
    //   } catch (error) {
    //     console.error("Error fetching user profile:", error);
    //     // Handle specific errors or redirect to login
    //     router.push("/auth/login");
    //   }
    // };

    // fetchUserProfile();
  }, []); // Removed [router] dependency for testing

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-lg font-medium">Loading user profile...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">User Profile</h1>
        <div className="text-black">
          <p className="mb-2">
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
