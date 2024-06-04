import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LastSection from "@/components/LastSection";
import Navbar from "@/components/Navbar";
import QueryForm from "@/components/QueryForm";
import Services from "@/components/Services";
import React from "react";

export default function page() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Services />
        <LastSection />
        <QueryForm />
        <Footer />
      </div>
    </>
  );
}
