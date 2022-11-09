import React from "react";

const RegisterModal = (props) => {
  return (
    <>
      <form action="" className="flex flex-col items-center">
        <h1 className="text-xl sm:text-3xl font-bold mb-4">REGISTER FORM</h1>
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
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          className="bg-[#e6e6e6] rounded-md px-3 py-1 text-base w-[80%] outline-none mt-2 placeholder:text-[#4e4e4e]"
          placeholder="Confirm password..."
        />
        <button className="mt-6 px-6 md:px-8 py-2 text-xs md:text-base font-semibold border rounded-md hover:bg-yellow hover:border-yellow hover:text-white duration-150 ">
          REGISTER NOW
        </button>
        <span className="mt-6 text-sm">
          Do you already have an account?
          <a
            href="#"
            className="underline hover:text-yellow ml-1"
            onClick={props.openModal}
          >
            Sign in
          </a>
        </span>
      </form>
    </>
  );
};

export default RegisterModal;
