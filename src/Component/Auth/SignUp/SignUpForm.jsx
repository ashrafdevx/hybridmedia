import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SingUpForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData = data;
    localStorage.setItem("userData", JSON.stringify(userData));
    navigate("/login");
  };

  return (
    <div className=" w-full flex items-center justify-center">
      <div class="md:max-w-md w-full px-4 py-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-10 flex items-center justify-center">
            <h3 class="text-gray-800 text-3xl font-extrabold flex items-center">
              Registration
            </h3>
          </div>

          <div>
            <div class="relative flex items-center">
              <input
                {...register("name", { required: true })}
                name="name"
                type="text"
                class="w-full text-gray-800 text-sm border border-gray-300 rounded-lg pl-9 py-3 outline-none"
                placeholder="*Name"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                class="w-[18px] h-[18px] absolute left-2"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke-miterlimit="10"
                  stroke-width="2"
                  d="M12 12c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4 1.791 4 4 4zM3 20c0-2.761 2.239-5 5-5h8c2.761 0 5 2.239 5 5v1H3v-1z"
                />
              </svg>
            </div>

            {errors.name && (
              <span className="text-[12px] font-semibold text-red-700">
                Name is required
              </span>
            )}
          </div>
          <div className="mt-3">
            <div class="relative flex items-center">
              <input
                {...register("email", { required: true })}
                name="email"
                type="text"
                class="w-full text-gray-800 text-sm border border-gray-300 rounded-lg  pl-9 py-3 outline-none"
                placeholder="*Email"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                class="w-[18px] h-[18px] absolute left-2"
                viewBox="0 0 682.667 682.667"
              >
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                  </clipPath>
                </defs>
                <g
                  clip-path="url(#a)"
                  transform="matrix(1.33 0 0 -1.33 0 682.667)"
                >
                  <path
                    fill="none"
                    stroke-miterlimit="10"
                    stroke-width="40"
                    d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                    data-original="#000000"
                  ></path>
                </g>
              </svg>
            </div>
            {errors.email && (
              <span className="text-[12px] font-semibold text-red-700">
                Email is required
              </span>
            )}
          </div>

          <div class="mt-3">
            <div class="relative flex items-center">
              <input
                name="password"
                type="password"
                {...register("password", { required: true })}
                class="w-full text-gray-800 text-sm border border-gray-300 rounded-lg  pl-9 py-3 outline-none"
                placeholder="password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                class="w-[18px] h-[18px] absolute left-2 cursor-pointer"
                viewBox="0 0 128 128"
              >
                <path
                  d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                  data-original="#000000"
                ></path>
              </svg>
            </div>
            {errors.password && (
              <span className="text-[12px] font-semibold text-red-700">
                Password is required
              </span>
            )}
          </div>
          <div class="mt-3">
            <div class="relative flex items-center">
              <input
                name="password"
                type="password"
                {...register("confirmPassword", { required: true })}
                class="w-full text-gray-800 text-sm border border-gray-300 rounded-lg  pl-9 py-3 outline-none"
                placeholder="Re-enter password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#bbb"
                stroke="#bbb"
                class="w-[18px] h-[18px] absolute left-2 cursor-pointer"
                viewBox="0 0 128 128"
              >
                <path
                  d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                  data-original="#000000"
                ></path>
              </svg>
            </div>
            {errors.confirmPassword && (
              <span className="text-[12px] font-semibold text-red-700">
                Confirm Password is required
              </span>
            )}
          </div>

          <div class="flex flex-wrap items-center justify-end gap-4 mt-3">
            <div>
              <a
                href="jajvascript:void(0);"
                class="text-blue-600 font-semibold text-sm hover:underline"
              >
                Already have a account?
              </a>
            </div>
          </div>

          <div class="mt-5">
            <button
              type="submit"
              class="w-full shadow-xl py-2.5 px-4 text-sm font-semibold tracking-wide rounded-full transition ease-in-out text-white bg-[#89089F] hover:bg-[#88089fe6] focus:outline-none"
            >
              Create Account
            </button>
          </div>
          <div className="flex mt-5 justify-center items-center">
            <p className=" text-gray-400">Have no account yet</p>
          </div>
          <div class="mt-5">
            <button
              type="button"
              onClick={() => navigate("/login")}
              class="w-full shadow-xl py-2.5 px-4 text-sm font-semibold tracking-wide rounded-full transition ease-in-out  border border-[#89089F] text-[#89089F]  hover:bg-[#89089F] hover:text-white focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUpForm;
