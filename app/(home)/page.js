import Banner from "@/components/home/Banner";
import BestSelling from "@/components/home/BestSelling";
import Menu from "@/components/home/Menu";
import NewArrival from "@/components/home/NewArrival";
import Overlay from "@/components/Overlay";

export default function Home() {
  return (
    <div className="relative mb-32">
      <Overlay />
      <Banner />
      <div className="px-3 md:px-0 md:container">
        <div className="lg:px-32 py-10 lg:py-0 lg:pt-28">
          <p className="flex justify-center items-center text-center lg:pb-4 text-lg lg:text-[36px] font-primary font-medium lg:font-semibold italic">
            We are Germany’s favourite local Italian, inviting you to come
            together
          </p>
          <p className="flex justify-center text-center lg:text-balance pb-2 lg:pb-6 text-lg lg:text-[36px] font-primary font-medium lg:font-semibold italic">
            with your friends & family to share an authentic Italian feast.
          </p>
          <p className="lg:px-40 text-text text-center text-[14px] lg:text-[18px] font-lato">
            Bring your friends and family to experience a delicious, authentic
            Italian feast! Patio Time is a place for everyone, and your next
            meal is never too far away, with 4 locations all across Sydney. We
            bring to you the very best of Italian cooking: robust flavours,
            beautifully fresh produce, and an atmosphere you can’t find anywhere
            else. Mangiamo !
          </p>
        </div>
      </div>

      <BestSelling />
      <Menu />
      <NewArrival />
    </div>
  );
}
