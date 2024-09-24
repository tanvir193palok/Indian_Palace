import Copyright from "./Copyright";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer
      className="relative top-28 z-20 bg-dark lg:bg-transparent lg:min-h-[320px]
   lg:bg-[url('/footer.png')] lg:bg-center lg:bg-cover lg:bg-no-repeat pt-20 lg:pt-48"
    >
      <div className="container mx-auto px-32">
        <div className="h-full flex flex-col gap-y-4">
          {/* info */}
          <div className="flex flex-col lg:flex-row lg:gap-x-[400px] gap-y-12 lg:gap-y-0 lg:mb-12">
            {/* contact */}
            <div className="flex-1 lg:max-w-[300px]">
              <div
                className="capitalize text-[20px] lg:text-[26px] font-bold text-nav
            font-primary mb-[22px]"
              >
                Contact Location
              </div>
              <div className="capitalize text-white font-lato pb-2">
                Riemekestraße 8-10
                <p>33102 Paderborn</p>
              </div>
              <div className="capitalize text-white font-lato">
                Tel: +49(0)5251-18444 85
                <p className="pl-7">+49(0)5251-18444 86</p>
                Fax: +49(0)5251-18444 87
              </div>
            </div>

            {/* social */}
            <div className="flex-1 lg:max-w-[280px] mb-12">
              <div
                className="capitalize text-[20px] lg:text-[26px] font-bold text-white
    font-primary mb-[22px]"
              >
                Social Network
              </div>
              <Socials />
            </div>
          </div>
          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
