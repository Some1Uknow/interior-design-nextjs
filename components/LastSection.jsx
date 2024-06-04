import * as React from "react";

function Step({ imgSrc, title, description, isLast }) {
  return (
    <div className="flex items-start mb-8">
      <div className="flex flex-col items-center mr-4">
        {!isLast && <div className="w-1 h-full bg-stone-900 mt-2" />}
      </div>
      <div>
        <img
          loading="lazy"
          src={imgSrc}
          alt={title}
          className="w-12 h-12 mb-4"
        />
        <h3 className="text-2xl font-bold text-stone-900 mb-2">{title}</h3>
        <p className="text-lg text-neutral-600">{description}</p>
      </div>
    </div>
  );
}

export default function LastSection() {
  const steps = [
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/46fdc763ee180d51e857ecf2969b420f9ac7bb32567e8701942801e31376fb01?apiKey=b9d89bf485c5474387cfed94f8e3a1f2&",
      title: "Start Project",
      description:
        "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience.",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3a0f5eee6d8a177f5d3d45f1be8116038a7e435f23781dce60bdfd2646b9a87b?apiKey=b9d89bf485c5474387cfed94f8e3a1f2&",
      title: "Craft",
      description:
        "Collaborate closely to achieve design excellence, refining your vision and crafting brilliance into every aspect of your space.",
    },
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/3d44de7e44fa00e4aefa05c9b6718205dedfc5f8617d34beeaa20db58b3d81fc?apiKey=b9d89bf485c5474387cfed94f8e3a1f2&",
      title: "Execute",
      description:
        "Bring your vision to life with meticulous execution, transforming your space into a masterpiece of design and functionality.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto lg:px-36 md:px-24 sm:px-10 max-sm:px-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-stone-900 text-center mb-16">
          Designing Your Dream in Three Simple Steps
        </h1>
        <div className="flex flex-col lg:flex-row items-start">
          <div className="w-full lg:w-1/2 lg:pr-8 mb-12 lg:mb-0">
            <div className="flex flex-col">
              {steps.map((step, index) => (
                <Step
                  key={index}
                  imgSrc={step.imgSrc}
                  title={step.title}
                  description={step.description}
                  isLast={index === steps.length - 1}
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e326fd5ba36d78b04f8fddafd4b5994f8c286d73fb193d3fe5375f748f0f273c?apiKey=b9d89bf485c5474387cfed94f8e3a1f2&"
              alt="Design visualization"
              className="w-full max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
