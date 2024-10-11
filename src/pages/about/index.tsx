import Faqs from "@/components/molecules/Faqs";
import MissionVisionComponent from "@/components/organisms/MissionVision";
import OurClients from "@/components/organisms/OurClients";
import VipExclusive from "@/components/organisms/VipExclusive";
import React from "react";

type Props = {};

const about = (props: Props) => {
  return (
    <div>
      <VipExclusive />
      <MissionVisionComponent />
      <OurClients />
      {/* <Faqs /> */}
    </div>
  );
};

export default about;
