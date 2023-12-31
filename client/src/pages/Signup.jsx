import React from "react";
import {Link} from 'react-router-dom'

export default function Signup() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign up</h1>
      <form action="" className="flex flex-col gap-4 ">
        <input
          type="text"
          name=""
          id="username"
          placeholder="Username"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="email"
          name=""
          id="email"
          placeholder="example@email.com"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="password"
          name=""
          id="password"
          placeholder="********"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account ?</p>
        <Link to='/login'> <span className="text-blue-500">Sign in</span></Link>
       
      </div>
    </div>
  );
}
