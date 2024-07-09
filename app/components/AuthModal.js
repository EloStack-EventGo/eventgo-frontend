import Link from "next/link";
import React from "react";

const AuthModal = ({ isVisible }) => {
  return (
    <div
      className={`absolute w-[180px] top-[40px] right-[-1px] bg-white border rounded-lg shadow-lg p-4 ${
        isVisible ? "block" : "hidden"
      } tooltip`}
    >
      <span className="flex flex-row justify-center text-black text-center text-md">
        <Link href={"/user/user-profile"}>
          <p className="hover:font-bold w-[70px] text-right hover:text-sky-700">
            My Profile
          </p>
        </Link>
        <span className="px-1">/</span>
        <Link href={"/logout"}>
          <p className="hover:font-bold w-[48px] text-left hover:text-sky-700">
            Logout
          </p>
        </Link>
      </span>
    </div>
  );
};

export default AuthModal;
