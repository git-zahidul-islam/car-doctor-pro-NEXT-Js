"use client"
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";


const SignUpPage = () => {

    const handleLogin =async (e) => {
      e.preventDefault()
      const newUser = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
      }
      console.log(newUser);
      
      const res = await axios.post('http://localhost:3000/signup/api',newUser)
      console.log(res);
      console.log("second step",res.data);
    }

    return (
        <div className="grid grid-cols-2 gap-10 px-24 my-20">
      <div className="flex justify-center">
        <Image
          src="/assets/images/login/login.svg"
          width={400}
          height={350}
          alt="login logo"
        />
      </div>
      <div className="space-y-10 px-14">
        <h1 className="text-center text-primary text-2xl">Sign up</h1>

        <form onSubmit={handleLogin}>
          <div className="space-y-5">
            <div>
              <label className="block" htmlFor="name">
                Email
              </label>
              <input
                className="border-2 p-2 w-full"
                type="text"
                name="name"
                placeholder="name"
              />
            </div>
            <div>
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                className="border-2 p-2 w-full"
                type="email"
                name="email"
                placeholder="email"
              />
            </div>
            <div>
              <label className="block" htmlFor="password">
                Password
              </label>
              <input
                className="border-2 p-2 w-full"
                type="password"
                name="password"
                placeholder="password"
              />
            </div>
            <button className="btn btn-primary w-full">Login</button>
          </div>
        </form>
        <div className="flex flex-col items-center space-y-2">
            <p>Already have account <span className="text-primary"><Link href={'/signin'}>Sign In</Link></span> </p>
        </div>
      </div>
    </div>
    );
};

export default SignUpPage;