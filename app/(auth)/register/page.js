"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Slider from "@/app/components/Slider";
import sliderData from "@/app/components/SliderData";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

//not using registerform anymore
//const RegisterForm = dynamic(() => import("@/app/components/RegisterForm"), { ssr: false });

export default function Register() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8888/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        });

      const result = await response.json();
      if (response.ok) {
        alert('Signup successful, please check your email to verify your account.');
        router.push('/login'); // Redirect to login page after successful signup
      } else {
        alert('Signup failed, please try again.');
      }
    } catch (error) {
      alert('An error occurred during signup, please try again.');
    }
  };

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main className="bg-crowd bg-cover bg-center bg-no-repeat w-full">
        <div className="w-full h-screen flex items-center bg-black bg-opacity-70">
          <div className="absolute left-[calc(5%)] w-1/3">
            <div className="container mx-auto pl-20">
              <h1 className="text-2xl font-semibold text-center text-white my-9 ml-4">Featured Artists</h1>
              <Slider slides={sliderData} />
            </div>
          </div>

          <div className="absolute left-[calc(45%)] top-[calc(10%)] w-[45%] bg-white opacity-65 p-5 text-black rounded-2xl py-10 px-20 flex-1 justify-center text-justify mt-8 mb-1">
            <p className="text-2xl font-bold mb-2 flex items-center justify-center text-center">JOIN US TODAY!</p>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md text-sm font-semibold">
              <label htmlFor="email" className="block mb-1">Email:</label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address"
                  }
                })}
                className="w-full p-2 mb-1 border-2 border-gray-300 rounded bg-slate-100"
              />
              {errors.email && <div className="text-red-500">{errors.email.message}</div>}

              <label htmlFor="name" className="block mb-2">Name:</label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 mb-4 border-2 rounded bg-slate-100"
              />
              {errors.name && <div className="text-red-500">{errors.name.message}</div>}

              <label htmlFor="password" className="block mb-2">Password:</label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters"
                  }
                })}
                className="w-full p-2 mb-4 border-2 rounded bg-slate-100"
              />
              {errors.password && <div className="text-red-500">{errors.password.message}</div>}

              <label htmlFor="confirmPassword" className="block mb-2">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  validate: value =>
                    value === watch('password') || "Passwords do not match"
                })}
                className="w-full p-2 mb-4 border-2 rounded bg-slate-100"
              />
              {errors.confirmPassword && <div className="text-red-500">{errors.confirmPassword.message}</div>}

              <label className="block mb-2">
                <input
                  type="checkbox"
                  {...register("terms", { required: "You must accept the terms and conditions" })}
                  className="mr-2"
                />
                I agree to the terms and conditions
              </label>
              {errors.terms && <div className="text-red-500">{errors.terms.message}</div>}

              <div className="text-left">
                <button type="submit" className="bg-white text-black border-2 border-black py-2 px-4 rounded-lg font-md hover:bg-black hover:text-white mt-2 mb-2">
                  Sign Up
                </button>
              </div>
            </form>
            <div className="flex items-center mt-2 mb-4">
        <div className="flex-1 border-t border-gray-400"></div>
        <div className="mx-3 text-black">OR</div>
        <div className="flex-1 border-t border-gray-400"></div>
      </div>

      <div className="flex justify-between mb-4 gap-1">
        <div className="text-center text-sm font-semibold">
          <button type="button" className="bg-white opacity-95 text-black border-2 border-black-400 py-2 px-4 rounded-xl flex items-center justify-center mb-2">
            <img src="./google.png" alt="Google Logo" className="w-8 h-8 mr-2" />
            Sign Up with Google
          </button>
        </div>

        <div className="text-center text-sm font-semibold">
          <button type="button" className="bg-white opacity-95 text-black border-2 border-black-400 py-2 px-4 rounded-xl flex items-center justify-center mb-2">
            <img src="./linkedin.png" alt="LinkedIn Logo" className="w-7 h-7 mr-3" />
            Sign Up with LinkedIn
          </button>
        </div>
      </div>

      <p className="text-center">
        Already have an account? <a href="/login" className="text-blue-400 underline hover:text-black font-semibold">Login</a>
      </p>
      </div>
      </div>
      </main>
    </>
  );
}
          




/*"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Slider from "@/app/components/Slider";
import sliderData from "@/app/components/SliderData";

const RegisterForm = dynamic(() => import("@/app/components/RegisterForm"), { ssr: false });

export default function Register() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <main className="bg-crowd bg-cover bg-center bg-no-repeat w-full">
        <div className="w-full h-screen flex items-center bg-black bg-opacity-70">
          <div className="absolute left-[calc(5%)] w-1/3">
            <div className="container mx-auto pl-20">
              <h1 className="text-2xl font-semibold text-center text-white my-9 ml-4">Featured Artists</h1>
              <Slider slides={sliderData} />
            </div>
          </div>

          <div className="absolute left-[calc(45%)] top-[calc(10%)] w-[45%] bg-white opacity-65 p-5 text-black rounded-2xl py-10 px-20 flex-1 justify-center text-justify mt-8 mb-1">
            <p className="text-2xl font-bold mb-2 flex items-center justify-center text-center">JOIN US TODAY!</p>
            <RegisterForm />
          </div>
        </div>
      </main>
    </>
  );
}
*/