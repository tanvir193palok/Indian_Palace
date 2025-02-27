const CheckoutSummary = () => {
  let totalPrice = 0;
  return (
    <div className="col-span-3 border border-gray-200 p-4 rounded">
      <h4 className="text-gray-800 text-lg mb-2 lg:mb-4 font-medium font-primary tracking-widest uppercase">
        order summary
      </h4>
      <div className="space-y-2">
        {/* Summary Products 
      {products.length > 0 ? (
        products.map((product) => (
          <SummaryProduct key={product.productId} product={product} />
        ))
      ) : (
        <p className="flex justify-center text-gray-600 py-6">
          Your cart is currently empty.
        </p>
      )}*/}
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-normal lg:font-medium py-2 lg:py-3 uppercas">
        <p>Subtotal</p>
        <p>${totalPrice}</p>
      </div>

      <div className="flex justify-between border-b border-gray-200 mt-1 text-gray-800 font-normal lg:font-medium py-2 lg:py-3 uppercas">
        <p>Shipping</p>
        <p>Free</p>
      </div>

      <div className="flex justify-between text-gray-800 font-normal lg:font-medium py-2 lg:py-3 uppercas">
        <p className="font-medium lg:font-semibold">Total</p>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
};

export default CheckoutSummary;
