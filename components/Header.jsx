const Header = () => {
  return (
    <header className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        <div className="w-full text-nav relative flex justify-center font-secondary font-extrabold text-center text-4xl tracking-[15px]">
          Indian Palace
        </div>
        <div className="flex font-primary items-center space-x-4 pr-6">
          <a
            href="#"
            className="text-center text-gray-700 hover:text-primary transition relative"
          >
            <div className="text-2xl">
              <i className="fa-solid fa-bag-shopping"></i>
            </div>
            <div className="text-sm font-medium text-text hover:text-nav leading-3">
              Cart
            </div>
            <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
              2
            </div>
          </a>
          <a
            href="#"
            className="text-center hover:text-white transition relative"
          >
            <div className="text-2xl">
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="text-sm text-text hover:text-nav font-medium leading-3">
              Admin?
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
