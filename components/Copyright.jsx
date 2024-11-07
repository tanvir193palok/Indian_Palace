import Link from "next/link";

const Copyright = () => {
  return (
    <div className="border-t border-white/20">
      <div className="lg:container mx-auto">
        <div className="py-4 lg:py-6">
          <p className="text-xs lg:text-base text-white text-center lg:pr-20 tracking-wider">
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
