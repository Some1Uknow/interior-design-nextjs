function StatisticsItem({ heading, subheading }) {
  return (
    <div className="text-center text-neutral-600">
      <span className="text-4xl md:text-6xl font-bold block">{heading}</span>
      <span className="text-xl md:text-xl mt-2 block">{subheading}</span>
    </div>
  );
}

export default function Hero() {
  const statistics = [
    { heading: "400+", subheading: "Project Complete" },
    { heading: "600+", subheading: "Satisfied Clients" },
    { heading: "100+", subheading: "Unique Styles" },
  ];

  return (
    <main className="lg:px-40 py-5">
      <section className="flex flex-col lg:flex-row items-center mb-16">
        <article className="w-full lg:w-2/3 lg:pr-8 mb-8 lg:mb-0">
          <h1 className="text-6xl lg:text-8xl font-bold text-stone-900">
            Interior Design
          </h1>
          <p className="mt-6 lg:mt-10 text-xl lg:text-xl leading-relaxed text-gray-700">
            Step into a world where the art of Interior Design is meticulously
            crafted to bring together timeless elegance and cutting-edge modern
            Innovation, Allowing you to transform your living spaces into the
            epitome of luxury and sophistication.
          </p>
        </article>
        <figure className="w-full lg:w-1/3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b9b3d585b658794d459daa0e6e604c2e4868f37b7d74be951450bbe5b4bb8f9?apiKey=b9d89bf485c5474387cfed94f8e3a1f2&"
            alt="Interior design example"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </figure>
      </section>

      <section className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 mb-10 lg:mb-0 lg:pr-8 space-y-10">
          <button className="w-full py-4 px-6 font-semibold text-white rounded-lg bg-stone-900 hover:bg-stone-800 transition-colors">
            Start Project
          </button>
          <div className="flex justify-between mt-20">
            {statistics.slice(0, 2).map((stat, index) => (
              <StatisticsItem key={index} {...stat} />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 md:mb-0 mt-24 md:pr-4">
              <StatisticsItem {...statistics[2]} />
            </div>
            <div className="w-full md:w-3/4">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/353f5aa7-be7d-49a9-8a3c-159fb881b4bf?apiKey=b9d89bf485c5474387cfed94f8e3a1f2&"
                alt="Unique styles example"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
