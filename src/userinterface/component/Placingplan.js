import React from "react";
import { CheckIcon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';


const plans = [
  {
    name: "Early Bird Ticket",
    price: 100,
    pillColor: "bg-white text-yellow-400",
    availableTill: "2025-08-16T23:59:00+05:30", // ✅ ISO format rakho
    features: [
      { label: "Access to speakers' sessions", available: true },
      { label: "Access to the networking area", available: true },
      { label: "Light gourmet meals and drinks", available: true },
      { label: "Raffle Entry to win exciting prizes", available: true },
    ],
  },
  {
    name: "Regular Ticket",
    price: 200,
    pillColor: "bg-white text-yellow-400",
    availableTill: "2025-08-25T10:00:00+05:30",
    features: [
      { label: "Access to speakers' sessions", available: true },
      { label: "Access to the networking area", available: true },
      { label: "Light gourmet meals and drinks", available: true },
      { label: "Raffle Entry to win exciting prizes", available: true },
      { label: "Chance to win merchandise and swags", available: true },
    ],
  },
  {
    name: "Premium Swags Ticket",
    price: 300,
    pillColor: "bg-white text-yellow-400",
    availableTill: "2025-08-25T22:00:00+05:30",
    features: [
      { label: "All perks of Regular", available: true },
      { label: "Chance to network with the VIPs and Speakers", available: true },
      { label: "Exclusive swag", available: true },
    ],
  },
];

export default function PricingPlans() {
  const checkExpired = (date) => {
    const now = new Date();
    const targetDate = new Date(date);
    return targetDate < now;
  };

  const formatDate = (date) =>
    new Date(date).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  return (
    <section className="bg-white py-16">
      <header className="text-center mb-10">
        <h2 className="text-5xl font-bold text-[#122043]">Pricing Plan</h2>
        <p className="text-gray-500 mt-1">
          A Great Opportunity only for you to join the Event
        </p>
      </header>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 px-4">
        {plans.map((plan) => {
          const expired = checkExpired(plan.availableTill);

          return (
            <div
              key={plan.name}
              className="group bg-gray-100 rounded-2xl shadow-md flex flex-col p-4 transition hover:shadow-xl hover:-translate-y-1"
            >
              {/* Price Header */}
              <div className="bg-white text-center px-6 py-12 border border-gray-200 relative mb-2 rounded-xl">
                <span className="text-sm text-[#0a142d] font-bold mr-1">₹</span>
                <span className="text-5xl font-bold text-[#122043] transition group-hover:text-yellow-500">
                  {plan.price}
                </span>
                <span className="text-gray-500 text-md font-bold">.00</span>

                <div
                  className={`absolute left-1/2 -bottom-5 transform -translate-x-1/2 px-4 py-1 rounded-full font-medium text-sm shadow-md border border-gray-200 transition ${plan.pillColor} group-hover:bg-yellow-400 group-hover:text-white`}
                >
                  {plan.name}
                </div>
              </div>

              {/* Features */}
              <div className="bg-white px-6 pt-10 pb-6 border border-gray-200 flex flex-col flex-grow rounded-xl">
                <ul className="space-y-4 mb-6 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      {feature.available ? (
                        <div className="flex items-center justify-center w-5 h-5 bg-yellow-400 rounded-full">
                          <CheckIcon className="w-4 h-4 text-white" />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center w-5 h-5 bg-gray-400 rounded-full">
                          <XMarkIcon className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <span
                        className={`${
                          feature.available ? "text-gray-700" : "text-gray-400"
                        }`}
                      >
                        {feature.label}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Registration Date */}
                <div className="mb-4 text-center">
                  {expired ? (
                    <span className="text-red-600 font-bold text-sm">
                      Expired on {formatDate(plan.availableTill)}
                    </span>
                  ) : (
                    <span className="text-gray-600 text-sm">
                      Available Till: {formatDate(plan.availableTill)}
                    </span>
                  )}
                </div>

                {/* Button */}
                <div className="mt-auto flex justify-center">
                  <a
  href={expired ? "#" : "https://konfhub.com/checkout/skill-showdown-v10?ticketId=55594"} // apna link yahan dalna
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    disabled={expired}
    className={`px-6 py-3 rounded-full font-semibold transition ${
      expired
        ? "bg-gray-400 text-white cursor-not-allowed"
        : "bg-yellow-400 text-white hover:bg-yellow-500"
    }`}
  >
    {expired ? "Not Available" : "Buy Ticket Now"}
  </button>
</a>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
