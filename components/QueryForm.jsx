"use client";
import { useState } from "react";

function QueryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // email sending logic here
    console.log("Form submitted", formData);
  };

  return (
    <section className="flex flex-col items-center px-4 py-8 text-lg max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold text-center text-stone-900 mb-4">
        Get in Touch with Us
      </h1>
      <p className="text-base leading-7 text-center text-neutral-600 mb-8">
        Please fill out the form below and we will get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:space-x-4">
          <div className="flex flex-col w-full">
            <label htmlFor="name" className="text-sm text-neutral-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border-b-2 outline-none text-base"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="email" className="text-sm text-neutral-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border-b-2 rounded-md outline-none text-base"
              placeholder="Enter your email address"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:space-x-4">
          <div className="flex flex-col w-full">
            <label htmlFor="phone" className="text-sm text-neutral-600">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 border-b-2 rounded-md outline-none text-base"
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="query" className="text-sm text-neutral-600">
            Query
          </label>
          <textarea
            id="query"
            name="query"
            value={formData.query}
            onChange={handleChange}
            className="p-3 border rounded-md outline-none text-base"
            placeholder="Enter your query"
            rows="5"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 font-semibold text-white bg-stone-900 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default QueryForm;
