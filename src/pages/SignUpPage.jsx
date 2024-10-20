import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './home/smallComponent/Footer';
// import { useAuthStore } from '../store/authUser';

const SignUpPage = () => {
  const { searchParams } = new URL(document.location);
	const emailValue = searchParams.get("email");

	const [email, setEmail] = useState(emailValue || "");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  
  // const {signup} = useAuthStore();


  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(email,username,password);
    navigate("/signup/registration?email=" + email);
  } 

  return (
    <div className="h-screen w-full bg-white">
      <header className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to={'/'}>
          <img src="/netflix-logo.png" alt="" className="w-52" />
        </Link>
        <Link to={'/login'}>
        <p className="text-black text-xl">Sign in</p>
        </Link>
      </header>
        <hr />
      <div className="flex justify-center items-center mt-20 mx-3">
        <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md">
          <h1 className="text-center text-white text-2xl font-bold mb-4">
            Sign Up
          </h1>

          <form className="space-y-4" onSubmit={handleSignup}>
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-300 block">
                Email
              </label>
              <input type="email" name="email" id="email" className="w-full px-3 py-2 mt-1 border rounded-md bg-transparent text-white focus:outline-none focus:ring" placeholder="you@example.com" 
              value = {email}
              onChange = {(e) => setEmail(e.target.value)}
               />

            </div>

            {/* Username Input */}
            <div>
              <label htmlFor="username" className="text-sm font-medium text-gray-300 block">
                Username
              </label>
              <input 
              type="text" 
              name="username" 
              id="username" 
              className="w-full px-3 py-2 mt-1 border rounded-md bg-transparent text-white focus:outline-none focus:ring" 
              placeholder="username" 
              value = {username}
              onChange = {(e) => setUsername(e.target.value)} />
              
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-300 block">
                Password
              </label>
              <input type="password" name="password" id="password" className="w-full px-3 py-2 mt-1 border rounded-md bg-transparent text-white focus:outline-none focus:ring" placeholder="password" 
              value = {password}
              onChange = {(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700"> Sign Up </button>
          </form>

          <div className="text-center text-gray-400">
            Already a member ? 
            <Link to={"/login"} className="text-red-500 hover:underline m-1">Sign in</Link>
          </div>
        </div>
      </div>
      <div className="bg-white w-full">
        <Footer />
      </div>
    </div>
  )
}

export default SignUpPage