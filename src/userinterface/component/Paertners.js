import React from "react";

const sponsors = [
  {
    name: "Partner 1",
    logo: "https://konfhub.com/_next/image?url=https%3A%2F%2Fmedia.konfhub.com%2Fpartners%2F2025%2FAugust%2F16%2F1755369721986-9ff24c8d-afff-47f5-8de2-7b782d8e6ada.png&w=1920&q=75",
    link: "#",
  },
  {
    name: "Partner 2",
    logo: "https://konfhub.com/_next/image?url=https%3A%2F%2Fmedia.konfhub.com%2Fpartners%2F2025%2FAugust%2F16%2F1755366088934-fcea95fc-3faa-4c8a-aad4-dd1639df630e.png&w=1920&q=75",
    link: "#",
  },
  {
    name: "Partner 3",
    logo: "https://konfhub.com/_next/image?url=https%3A%2F%2Fmedia.konfhub.com%2Fpartners%2F2025%2FAugust%2F16%2F1755369965550-5688e278-40e1-4a0b-b4bb-de5d4b09f914.png&w=1920&q=75",
    link: "#",
  },
];

export default function Sponsors() {
  return (
    <section
      className="sponsor bg-gray-50 py-16"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/cubes.png')", // optional background
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#122043]">Our Partners</h2>
          <p className="text-gray-600 mt-2">
            We proudly collaborate with our sponsors
          </p>
        </div>

        {/* Sponsor Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition p-6"
            >
              <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-20 object-contain mx-auto"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
