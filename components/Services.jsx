import * as React from "react";

function ServiceItem({ iconSrc, title, description }) {
  return (
    <div className="space-y-4">
      <img loading="lazy" src={iconSrc} alt={title} className="w-12 h-12" />
      <h3 className="text-2xl font-semibold text-stone-900">{title}</h3>
      <p className="text-lg leading-relaxed text-neutral-600">{description}</p>
    </div>
  );
}

function Services() {
  const services = [
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/88dc6e3e0c6c003daf0d22f0021de554a639b3766ff408528d8d3ac0455e519c?apiKey=b9d89bf485c5474387cfed94f8e3a1f2&",
      title: "Lighting Design",
      description:
        "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere.",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/80a9ca0804e8e147c6ffee327f3a90bb4cac79873c41789baf20dca615564bb7?apiKey=b9d89bf485c5474387cfed94f8e3a1f2&",
      title: "Interior Design",
      description:
        "From concept to completion, we oversee every detail to bring your vision to life efficiently.",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b1c9e5f38448fd5592618bf4c15d53239b76929964aafc303c64ac8e0d5c721a?apiKey=b9d89bf485c5474387cfed94f8e3a1f2&",
      title: "Outdoor Design",
      description:
        "Celebrate the changing seasons with our seasonal outdoor decor services.",
    },
  ];

  return (
    <section className="py-10 lg:px-40 md:px-32 max-sm:px-8 sm:px-10">
      <div className="container mx-auto px-4">
        <header className="mb-16 flex items-center space-x-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba5565c42ca40c42c739b09724eeea5246f2fe9810ae64015cc9ce363b9e32ad?apiKey=b9d89bf485c5474387cfed94f8e3a1f2&"
            alt="Services Icon"
            className="shrink-0 my-auto max-w-full border-solid aspect-[33.33] border-[3px] border-stone-900 stroke-[3px] stroke-stone-900 w-[102px]"
          />
          <h2 className="text-4xl lg:text-6xl font-bold text-stone-900">
            Our Services
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              iconSrc={service.iconSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
