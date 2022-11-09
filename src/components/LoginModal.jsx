import React from "react";

const LoginModal = (props) => {
  return (
    <>
      <form action="" className="flex flex-col items-center">
        <h1 className="text-xl sm:text-3xl font-bold mb-4">LOGIN FORM</h1>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-[#e6e6e6] rounded-md px-3 py-1 text-base w-[80%] outline-none placeholder:text-[#4e4e4e]"
          placeholder="Enter your email..."
        />
        <input
          type="password"
          name="password"
          id="password"
          className="bg-[#e6e6e6] rounded-md px-3 py-1 text-base w-[80%] outline-none mt-2 placeholder:text-[#4e4e4e]"
          placeholder="Enter your password..."
        />
        <div className="flex justify-between w-[80%] mt-2 mb-4">
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="rememberPassword"
              id="rememberPassword"
              className="w-4 h-4"
            />
            <label htmlFor="rememberPassword" className="text-sm">
              remember me
            </label>
          </div>
          <a href="#" className="text-sm hover:underline hover:text-yellow">
            forgot password?
          </a>
        </div>
        <button className="px-6 md:px-8 py-2 text-xs md:text-base font-semibold border rounded-md hover:bg-yellow hover:border-yellow hover:text-white duration-150 ">
          LOGIN NOW
        </button>
        <span className="mt-6 text-sm">
          Don`t have an account
          <a
            href="#"
            className="underline hover:text-yellow ml-1"
            onClick={props.openModal}
          >
            create one!
          </a>
        </span>
      </form>
    </>
  );
};

export default LoginModal;
