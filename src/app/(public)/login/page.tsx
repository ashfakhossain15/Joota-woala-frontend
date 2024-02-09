"use client";
import Image from "next/image";
import Link from "next/link";
import useState from "react";

type Props = {};

const login = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="flex border-gray-200 border flex-col mx-auto shadow-2xl max-w-2xl items-center justify-center max-h-min  bg-slate-100 rounded-xl">
        <div className="my-4">
          <Image
            className="w-40"
            title="login - photo"
            src="/public"
            alt=""
          ></Image>
          <h1 className="text-3xl font-serif text-center  ">
           Joota Woala <br /> Login page
          </h1>
        </div>
        <form className=" rounded w-full mx-auto  pt-6 pb-8 mb-4">
          <div className="mb-4 px-14">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6 px-14">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-0 top-0 mt-3 mr-4"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-900 text-teal-00 font-serif text-lg py-3 px-6 hover:px-44 hover:text-white transition-all duration-500  rounded-md focus:outline-none focus:shadow-outline"
            >
              Sign In
            </button>
          </div>
          <div className="flex justify-center mt-8  gap-x-9">
            <button className="px-6 py-4 bg-cyan-600 text-white rounded-lg">
              Google Login
            </button>
            <button className="px-6 py-4 bg-slate-900 text-white rounded-lg">
              Github login
            </button>
          </div>
          <p className="px-14 mt-7">
            If you Don't have an account ! Please
            <Link className="text-blue-500" href="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default login;
