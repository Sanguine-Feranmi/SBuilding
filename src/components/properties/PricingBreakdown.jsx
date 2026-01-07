export default function PricingBreakdown({ price }) {
  return (
    <section className="bg-[#141415] border border-white/10 rounded-2xl p-6 space-y-8">
      <h2 className="text-xl font-semibold">Comprehensive Pricing Details</h2>

      {/* LISTING PRICE */}
      <div>
        <p className="text-sm text-gray-400">Listing Price</p>
        <p className="text-3xl font-bold">${price.toLocaleString()}</p>
      </div>

      {/* ADDITIONAL FEES */}
      <div className="space-y-4">
        <h3 className="font-semibold">Additional Fees</h3>

        <PriceRow title="Property Transfer Tax" value="$25,000" />
        <PriceRow title="Legal Fees" value="$3,000" />
        <PriceRow title="Home Inspection" value="$500" />
        <PriceRow title="Property Insurance" value="$1,200" />
      </div>

      {/* MONTHLY COSTS */}
      <div className="space-y-4">
        <h3 className="font-semibold">Monthly Costs</h3>

        <PriceRow title="Property Taxes" value="$1,250" />
        <PriceRow title="HOA Fee" value="$300" />
        <PriceRow title="Mortgage Payment" value="Varies" />
      </div>
    </section>
  );
}

const PriceRow = ({ title, value }) => (
  <div className="flex justify-between text-gray-300 text-sm">
    <span>{title}</span>
    <span className="font-medium">{value}</span>
  </div>
);
