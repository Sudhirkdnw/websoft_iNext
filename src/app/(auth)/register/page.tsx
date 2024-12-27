import React from "react";
import { SignupFormDemo } from "@/components/Register";

const Register: React.FC = () => {
  return (
    <>
      <div className="">
        
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Create an account to continue
        </p>
      </div>
      <SignupFormDemo />
    </>
  );
};

export default Register;
