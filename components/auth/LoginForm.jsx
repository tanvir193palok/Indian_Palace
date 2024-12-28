const LoginForm = () => {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-sm font-medium">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-nav"
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-nav"
        />
      </div>
      <button
        type="submit"
        className="w-full font-primary tracking-wide font-medium uppercase py-3 px-4 bg-nav text-white rounded-lg hover:bg-text focus:outline-none"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
