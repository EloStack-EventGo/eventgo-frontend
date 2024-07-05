"use client"
import { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8888/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      /*if (response.ok) {
        console.log('Login successful:', result);
        // Save the token to local storage or cookies
        localStorage.setItem('token', result.token);
      } else {
        console.error('Login failed:', result);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }*/
      console.log(data);
      if (data.Error) {
          console.error(data.ErrorDetail);
      } else {
          console.log(data.ResponseDetail);
      }
    }catch (error) {
        console.error('Error during login:', error);
      }
  };

  return (
    <main className="bg-crowd bg-cover bg-center bg-no-repeat w-full">
      <div className="w-full h-screen flex items-center bg-black bg-opacity-70">
        <div className="flex items-center justify-center w-full flex-1 px-20 text-center">
          <div className="bg-white rounded-xl shadow-2xl shadow-slate-300 flex w-2/3 max-w-4xl opacity-70">
            <div className="w-1/2 p-9 text-center text-black">
              <h1 className="text-3xl font-bold flex justify-center mt-20 relative top-[calc(10%)]">
                Welcome Back !
              </h1>
              <div className="border-2 w-20 border-black inline-block mt-16"></div>
              <p className="mt-14 text-black text-center font-semibold">
                Your favourite events are waiting.
              </p>
              <p className="mt-2 text-center font-semibold">
                Let's get you signed in first.
              </p>
            </div>
            <div className="w-1/2 p-7">
              <form onSubmit={handleSubmit}>
                <div className="py-10"></div>
                <h1 className="absolute top-[calc(26%)] font-bold text-xl mb-8">SIGN IN TO YOUR ACCOUNT</h1>
                <div className="flex flex-col">
                  <label className="text-start mt-4 text-sm font-semibold">Email Address: </label>
                  <div className="bg-white w-72 p-1 border-2 border-y-gray mt-2 flex items-center">
                    <FaEnvelope />
                    <input
                      type="email"
                      name="email"
                      placeholder=""
                      className="outline-none text-sm m-2 flex-1"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <label className="text-start text-sm mt-2 mb-0 font-semibold">Password: </label>
                  <div className="bg-white w-72 p-1 border-2 border-y-gray mt-2 flex items-center">
                    <FaLock />
                    <input
                      type="password"
                      name="password"
                      placeholder=""
                      className="outline-none text-sm m-2 flex-1"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-between w-72 mb-5">
                    <label className="flex items-center text-xs">
                      <input type="checkbox" name="Remember" className="m-2 font-semibold" />
                      Remember me
                    </label>
                    <a href="#" className="font-semibold text-xs m-2 hover:text-gray-500">Forgot Password ?</a>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-white text-black border-2 border-black py-2 px-4 rounded-lg font-md hover:bg-black hover:text-white mt-5 mb-3 text-sm"
                    >
                      Log In
                    </button>
                  </div>
                  <div className="w-72 mb-5">
                    <a href="/register" className="font-semibold text-xs mt-5 underline hover:text-gray-500 flex items-start">
                      Don't have an account ?
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}





/*import { FaEnvelope, FaLock} from "react-icons/fa"

export default function login(){
  return (
    <>
  
    {/*background image */
   /* <main className="bg-crowd bg-cover bg-center bg-no-repeat w-full">   
      <div className="w-full h-screen flex items-center bg-black bg-opacity-70">

      <div className="flex tems-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-xl shadow-2xl shadow-slate-300 flex w-2/3 max-w-4xl opacity-70">
        <div className="w-1/2 p-9 text-center text-black">
        <h1 className="text-3xl font-bold flex justify-center mt-20 relative top-[calc(10%)]">Welcome Back !</h1>
        <div className="border-2 w-20 border-black inline-block mt-16"></div>
        <p className="mt-14 text-black text-center font-semibold">Your favourite events are waiting.</p>
        <p className="mt-2 text-center font-semibold"> Let's get you signed in first.</p>
        </div>



        <div className="1/2 p-7">
      <div className="py-10"></div>
       <h1 className="absolute top-[calc(26%)] font-bold text-xl mb-8">SIGN IN TO YOUR ACCOUNT</h1>
       <div className="flex flex-col">
        <label className="text-start mt-4 text-sm font-semibold ">Email Address: </label>
          <div className="bg-white w-72 p-1 border-2 border-y-gray mt-2 flex items-center"><FaEnvelope/> 
          <input type="email" name="email" placeholder="" className="outline-none text-sm m-2 flex-1"></input>
          </div>
          
        <label className="text-start text-sm mt-2 mb-0 font-semibold">Password: </label>
          <div className="bg-white w-72 p-1 border-2 border-y-gray mt-2 flex items-center"><FaLock/> 
          <input type="password" name="password" placeholder="" className="outline-none text-sm m-2 flex-1"></input>
          </div>
        
{/**rember me n forgot password *//*
<div className="flex justify-between w-72 mb-5">
          <label className="flex items-center text-xs">
          <input type="checkbox" name="Remember" className="m-2 font-semibold"/>Remember me </label>
          <a href="#" className="font-semibold text-xs m-2 hover:text-gray-500">Forgot Password ? </a>

</div>
{/**log in button */

/*<div className="text-center">
              {/* Submit Button */
              /*<button type="submit" className="bg-white text-black border-2 border-black py-2 px-4 rounded-lg font-md hover:bg-black hover:text-white mt-5 mb-3 text-sm">
          
                Log In
              </button>
</div>   

<div className=" w-72 mb-5">
          
          <a href="/register" className="font-semibold text-xs mt-5 underline hover:text-gray-500 flex items-start">Don't have an account ?  </a>

</div>




       </div>
        </div>
      </div>
      </div>
      </div>
    </main>



    </>

  )
}*/