import Link from 'next/link'
import React from 'react'

const AuthModal = ({ isVisible }) => {
  return (
    <div
      className={`absolute w-[180px] top-[40px] right-[-1px] bg-white border rounded-lg shadow-lg p-4 ${
        isVisible ? 'block' : 'hidden'
      } tooltip`}
    >
      <span className="flex flex-row justify-center text-white text-center text-md">
        <Link href={'/register'}>
          <p className="hover:font-bold w-[70px] text-right hover:text-sky-700">
            Register
          </p>
        </Link>
        <span className="px-1">/</span>
        <Link href={'/login'}>
          <p className="hover:font-bold w-[48px] text-left hover:text-sky-700">
            Login
          </p>
        </Link>
      </span>
    </div>
  )
}

export default AuthModal
