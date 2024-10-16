import Copyright from "./Copyright";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="relative z-20 bg-dark lg:bg-text lg:min-h-[300px] pt-6 lg:pt-10">
      <div className="container mx-auto px-32">
        <div className="h-full flex flex-col">
          {/* info */}
          <div className="flex flex-col lg:flex-row justify-between gap-y-12 lg:gap-y-0 lg:mb-12">
            {/* contact */}
            <div className="flex-1 lg:max-w-[300px]">
              <div
                className="capitalize text-[20px] lg:text-[26px] font-bold text-white
            font-primary mb-[22px] tracking-wider"
              >
                Contact Location
              </div>
              <div className="capitalize text-nav font-lato pb-2 text-lg tracking-wide">
                Riemekestraße 8-10
                <p>33102 Paderborn</p>
              </div>
              <div className="capitalize text-black font-lato text-lg tracking-wide">
                Tel: +49(0)5251-18444 85
                <p className="pl-7">+49(0)5251-18444 86</p>
                Fax: +49(0)5251-18444 87
              </div>
            </div>

            {/* social */}
            <div className="flex-1 lg:max-w-[280px]">
              <div
                className="capitalize text-[20px] lg:text-[26px] font-bold text-white
    font-primary mb-[22px] tracking-wider"
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
