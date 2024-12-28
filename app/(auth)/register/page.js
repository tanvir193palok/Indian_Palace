import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";
import React from "react";

const RegisterPage = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/about/location.jpg")' }}
    >
      <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg max-w-sm w-full"> 
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2> 
        {/* Registration form */}
        <RegisterForm />

        <p className="mt-2 lg:mt-4 text-center text-sm lg:text-base text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-primary">
            {" "}
            Login now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;