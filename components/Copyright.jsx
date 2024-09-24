import Link from "next/link";

const Copyright = () => {
  return (
    <div className="border-t border-white/20">
      <div className="container mx-auto">
        <div className="py-6">
          <p className="text-base text-white text-center pr-20 tracking-wider">
            Copyright &copy; 2024 Indian Palace. All rights reserved. <br />
            <span className="pb-4 tracking-wider">
              Developed by{" "}
              <Link className="text-green-500" href="/">
                BongoBrain
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Copyright;
