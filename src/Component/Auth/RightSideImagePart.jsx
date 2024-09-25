import React from "react";

const RightSideImagePart = () => {
  return (
    <div class="md:h-full h-full   flex items-center justify-center  relative bg-[#89089F] rounded-t-xl mt-4 sm:mt-0 sm:rounded-l-xl lg:p-12 p-8">
      <div class="absolute top-3 left-0 right-0 text-center sm:hidden p-4">
        <p class="text-white relative bottom-0 font-medium text-3xl sm:text-[22px]">
          Welcome to our shop
        </p>
        <p class="text-white font-semibold relative top-4 text-[12px]">
          Purchase imported shoes
        </p>
      </div>
      <img
        src="/Auth/AuthSideImage.svg"
        class="w-[367px] h-full object-contain"
        alt="login-image"
      />
      <div class="absolute hidden sm:block left-0 right-0 text-center bottom-[20%] p-4">
        <p class="text-white relative bottom-0 font-medium text-3xl sm:text-[22px]">
          Welcome to our shop
        </p>
        <p class="text-white font-semibold relative top-4 text-[12px]">
          Purchase imported shoes
        </p>
      </div>
    </div>
  );
};

export default RightSideImagePart;
