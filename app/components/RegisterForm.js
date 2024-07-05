//not using anymore
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

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
  return (
    <>
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
      
       
          <button  type="submit" className="bg-white text-black border-2 border-black py-2 px-4 rounded-lg font-md hover:bg-black hover:text-white mt-2 mb-2">
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
    </>
  );
}



/*"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <>
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
</>
  );
}
*/