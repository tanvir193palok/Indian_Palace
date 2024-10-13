import Banner from "@/components/home/Banner";
import BestSelling from "@/components/home/BestSelling";
import Menu from "@/components/home/Menu";
import NewArrival from "@/components/home/NewArrival";
import Overlay from "@/components/Overlay";

export default function Home() {
  return (
    <div className="relative">
      <Overlay />
      <Banner />
      <div className="container">
        <div className="px-32 pt-28">
          <p className="flex justify-center items-center text-[36px] font-primary font-semibold italic">
            We are Germany’s favourite local Italian, inviting you to come
            together
          </p>
          <p className="flex justify-center pb-6 text-[36px] font-primary font-semibold italic">
            with your friends & family to share an authentic Italian feast.
          </p>
          <p className="px-40 text-text text-center text-[18px] font-lato">
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
