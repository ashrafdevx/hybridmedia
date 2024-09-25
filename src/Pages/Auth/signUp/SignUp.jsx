import React from "react";
import RightSideImagePart from "../../../Component/Auth/RightSideImagePart";
import SingUpForm from "../../../Component/Auth/SignUp/SignUpForm";

const SignUp = () => {
  return (
    <div class="font-[sans-serif]">
      <div class="min-h-screen flex flex-col items-center justify-center">
        <div class="grid md:grid-cols-2 items-center justify-center max-h-fit sm:min-h-[743px] gap-4 max-md:gap-8 max-w-7xl max-md:max-w-lg w-full  shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-xl">
          <RightSideImagePart />
          <SingUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
