import React from "react";

function SocialIcon({ src, alt }) {
  return <img loading="lazy" src={src} alt={alt} className="w-8 h-8" />;
}

function FooterSection({ title, items, isContact = false }) {
  return (
    <section className="mb-8 px-4">
      <h2 className="text-2xl font-semibold text-white mb-6">{title}</h2>
      <ul className="space-y-4 text-lg text-neutral-300">
        {isContact ? (
          <>
            <li>{items[0]}</li>
            <li>
              <address className="not-italic">
                India
                <br />
                Gurgaon
                <br />
                Pin Code
              </address>
            </li>
          </>
        ) : (
          items.map((item, index) => <li key={index}>{item}</li>)
        )}
      </ul>
    </section>
  );
}

export default function Footer() {
  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d72f926c0b2350e008e5aa0739e159379e0306489d2e201976170a32297c545a?apiKey=b9d89bf485c5474387cfed94f8e3a1f2&",
      alt: "Facebook",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e583e1641a37d3bda82222e9e6d2bf38eeec6ad8a53f1ce95b78cd45383e9bdf?apiKey=b9d89bf485c5474387cfed94f8e3a1f2&",
      alt: "Twitter",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/347b3154a3c703b62ea65fd2b2a2f0d5b35cb6110ee73ce9a28bab3fc9485edc?apiKey=b9d89bf485c5474387cfed94f8e3a1f2&",
      alt: "Instagram",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d24e907b795431cbc25df83d51a28627a8c8f11fb7ead27f66fa0064405e36b4?apiKey=b9d89bf485c5474387cfed94f8e3a1f2&",
      alt: "LinkedIn",
    },
  ];

  const services = [
    "Interior design",
    "Outdoor design",
    "Lightning design",
    "Office design",
  ];
  const company = ["Reviews", "Careers", "Pricing", "Press inquiries"];

  return (
    <footer className="bg-stone-900 text-white py-16 w-full">
      <div className="px-20">
        <div className="flex flex-col items-center md:items-start md:flex-row">
          <section className="w-full md:w-auto mb-12 md:mb-0 px-4 text-center md:text-left">
            <img
              loading="lazy"
              src="./icrave.png"
              alt="ICRAVE Logo"
              className="h-12 w-auto mb-6 dark:invert mx-auto md:mx-0"
            />
            <p className="text-lg text-neutral-300 mb-8">
              ICRAVE: Your premier destination for luxury and modern interior
              design.
            </p>
            <nav className="flex justify-center md:justify-start space-x-4">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-neutral-300 hover:text-white"
                >
                  <SocialIcon {...icon} />
                </a>
              ))}
            </nav>
          </section>

          <div className="w-full flex flex-col md:flex-row md:justify-between">
            <FooterSection title="Our Services" items={services} />
            <FooterSection title="Company" items={company} />
            <FooterSection
              title="Contact Us"
              items={["info@ICRAVE.com"]}
              isContact={true}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
