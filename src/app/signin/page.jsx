"use client"
import Image from "next/image";
import Link from "next/link";
import {signIn} from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const SignInPage = () => {

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        const res = signIn("credentials",{
          email,
          password,
          redirect: true
        })
        console.log(res);
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
        <h1 className="text-center text-primary text-2xl">Login</h1>

        <form onSubmit={handleLogin}>
          <div className="space-y-5">
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
              <label className="block" htmlFor="email">
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
            <p>Login with</p>
            <div><FaGoogle size={30}/></div>
            <p>Don't have any account <span className="text-primary"><Link href={'/signup'}>Sign Up</Link></span> </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
