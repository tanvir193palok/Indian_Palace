import CheckoutForm from "@/components/checkout/CheckoutForm";
import CheckoutSummary from "@/components/checkout/CheckoutSummary";

const CheckoutPage = () => {
  return (
    <div class="container grid grid-cols-8 items-start pb-16 pt-4 gap-6 mb-32">
      <CheckoutForm />
      <CheckoutSummary />
    </div>
  );
};

export default CheckoutPage;