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
      mobile: "123-456-7890",
      address: "123 Main St, Anytown, USA",
      // contactNumber: "123-456-7890", // Added contactNumber field
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
  const handleLogout = () => {
    // localStorage.removeItem("token");
    // router.push("/auth/login");
  };

  const handleUpdateProfile = () => {
    // router.push("/user/update-profile");
  };

  const handleMyPurchases = () => {
    // router.push("/user/my-purchases");
  };

  const handleTicketsSold = () => {
    // router.push("/user/sold-tickets");
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <p className="text-lg font-medium">Loading user profile...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-black">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">User Profile</h1>
        <div className="text-center mb-4">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Mobile:</strong> {user.mobile}
          </p>
          <p>
            <strong>Address:</strong> {user.address}
          </p>
          {/* Uncomment and add more fields as needed */}
          {/* <p>
            <strong>Contact Number:</strong> {user.contactNumber}
          </p> */}
        </div>
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleUpdateProfile}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Update Profile
          </button>
          <button
            onClick={handleMyPurchases}
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-700"
          >
            My Purchases
          </button>
          <button
            onClick={handleTicketsSold}
            className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-700"
          >
            Tickets Sold
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
