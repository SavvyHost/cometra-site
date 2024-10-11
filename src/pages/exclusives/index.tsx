import React from "react";
import ImageGallery from "@/components/organisms/ImageGallery";
import CardComponent from "@/components/organisms/ExclusivesCard";
import fetchData from "@/helper/FetchData";
import { TourPackage } from "@/types/tour";

interface FilterAndCardsProps {
  toursData: TourPackage[];
}

const FilterAndCards: React.FC<FilterAndCardsProps> = ({ toursData }) => {
  return (
    <div className="bg-[#F7F7F9] lg:px-16 lg:py-6 py-4">
      <h3 className="ml-4 text-[#0C1D6D] font-bold text-2xl">
        Choose Your Trip
      </h3>
      <ImageGallery />
      <h3 className="ml-4 my-4 text-[#0C1D6D] font-bold text-2xl">
        VIP Exclusives
      </h3>
      <CardComponent toursData={toursData} />
    </div>
  );
};

export default FilterAndCards;

export async function getServerSideProps() {
  const data = await fetchData("tours");

  return {
    props: {
      toursData: data.data as TourPackage[], // Ensure this matches the type
    },
  };
}
