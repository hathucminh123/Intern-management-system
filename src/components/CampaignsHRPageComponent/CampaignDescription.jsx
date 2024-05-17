import React from "react";
import CardCampainsDetails from "./CardCampainsDetails";
import CampaingnsTable from "./CampaingnsTable";

const CampaignDescription = () => {
  return (
    <div className="w-full">
      <CardCampainsDetails />
      <div className="m-3">Danh sách CV của ứng viên</div>
      <CampaingnsTable />
    </div>
  );
};

export default CampaignDescription;
