import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/about/location.jpg")' }}
    >
      <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        {/* Login form */}
        <LoginForm />

        <p className="mt-2 lg:mt-4 text-center text-sm lg:text-base text-gray-600">
          Don&apos;t have account?{" "}
          <Link href="/register" className="text-primary">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
