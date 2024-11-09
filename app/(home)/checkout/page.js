import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";

const CheckoutPage = () => {
  return (
    <div className="px-3 lg:px-16 lg:container grid grid-cols-1 lg:grid-cols-8 gap-6 items-start pb-16 pt-4 mb-14 lg:mb-32">
      {/* CheckoutSummary section: appears on top for small screens, remains on the side for larger screens */}
      <div className="order-1 lg:col-span-3 lg:order-2">
        <CheckoutSummary />
      </div>
      
      {/* CheckoutForm section: below CheckoutSummary on small screens, remains on the side for larger screens */}
      <div className="order-2 lg:col-span-5 lg:order-1">
        <CheckoutForm />
      </div>
    </div>
  );
};

export default CheckoutPage;
