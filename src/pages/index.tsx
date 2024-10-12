import React from "react";
import HeroSection from "@/components/organisms/HeroSection";
import SecondSection from "@/components/organisms/SecondSection";
import ThirdSection from "@/components/organisms/ThirdSection";
import FourSection from "@/components/organisms/FourSection";
import OurClients from "@/components/organisms/OurClients";
import fetchData from "@/helper/FetchData";
import { ToursData } from "@/types/tour";

interface HomeProps {
  toursData: {
    status: number;
    message: string;
    data: ToursData[];
  };
}

export default function COMETRA({ toursData }: HomeProps) {
  console.log("🚀 ~ Home ~ toursData:", toursData);

  return (
    <div className="">
      <HeroSection />
      <SecondSection />
      <ThirdSection toursData={toursData.data} />
      <FourSection />
      <OurClients />
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetchData("tours");

  return {
    props: {
      toursData: data,
    },
  };
}
