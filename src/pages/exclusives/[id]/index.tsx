import Faqs from "@/components/molecules/Faqs";
import GoodToKnow from "@/components/molecules/GoodToKnow";
import ProgramDetails from "@/components/molecules/ProgramDetails";
import TourPrices from "@/components/molecules/TourPrices";
import TripClients from "@/components/molecules/TripClients";
import TripTitle from "@/components/molecules/TripTitle";
import TripVideo from "@/components/molecules/TripVideo";
import BottomBar from "@/components/organisms/BottomBar";
import ImageSliderComponent from "@/components/organisms/ImageSliderComponent";
import fetchData from "@/helper/FetchData";
import { GetServerSidePropsContext } from "next";
import React from "react";

type Price = {
  id: number;
  title: string;
  price: number;
};

type TourPrice = {
  id: number;
  title: string;
  from_month: string;
  to_month: string;
  prices: Price[];
};

type TourIncludes = {
  description: string;
  status: string;
};

type TourFrequentlyQuestions = {
  question: string;
  answer: string;
};

type TourItinerary = {
  id: number;
  title: string;
  description: string;
  city: {
    name: string;
  };
  place: {
    name: string;
  };
};

type Props = {
  DetailTour: {
    title: string;
    description: string;
    min_price: number;
    images: { url: string }[];
    duration: number;
    age_range: string;
    destination: string;
    tour_includes: TourIncludes[];
    tour_frequently_questions: TourFrequentlyQuestions[];
    tour_itineraries: TourItinerary[];
    tour_prices: TourPrice[]; // Add tour_prices to the props type
  };
};

const DetailsTrip = ({ DetailTour }: Props) => {
  const {
    title,
    description,
    images,
    duration,
    age_range,
    destination,
    min_price,
    tour_includes,
    tour_frequently_questions,
    tour_itineraries,
    tour_prices, // Destructure tour_prices
  } = DetailTour;

  return (
    <div>
      <div className="lg:px-0">
        <ImageSliderComponent images={images} />
      </div>
      <div className="lg:px-16">
        <TripTitle
          title={title}
          destination={destination}
          description={description}
          duration={duration}
          ageRange={age_range}
          price={min_price}
        />
        <ProgramDetails itineraries={tour_itineraries} />
        <GoodToKnow includes={tour_includes} />
        <TourPrices tourPrices={tour_prices} />{" "}
        {/* Pass tour_prices to TourPrices component */}
        <TripVideo />
        <Faqs questions={tour_frequently_questions} />
        <TripClients />
        <BottomBar />
      </div>
    </div>
  );
};

export default DetailsTrip;

// Fetch data on the server side
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params as { id: string };
  const DetailTour = await fetchData(`tours/${id}`);

  return {
    props: {
      DetailTour: DetailTour.data,
    },
  };
}
