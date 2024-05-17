import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";
import SearchBarCampaigns from "./SearchBarCampaigns";
import CardCampaigns from "./CardCampaigns";
import { Collapse } from "antd";
const text = (
  <>
    + Số lượng thành viên: 8<br />+ Thời gian thực tập: 3 tháng
  </>
);
const items = [
  {
    key: "1",
    label: "Frontend Internship",
    children: (
      <div>
        <p>{text}</p>
        <CardCampaigns />
      </div>
    ),
  },
  {
    key: "2",
    label: "Frontend Internship",
    children: (
      <div>
        <p>{text}</p>
        <CardCampaigns />
      </div>
    ),
  },
  {
    key: "3",
    label: "Frontend Internship",
    children: (
      <div>
        <p>{text}</p>
        <CardCampaigns />
      </div>
    ),
  },
];
const Campaigns = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="w-full items-center justify-center">
      <SearchBarCampaigns />
      <div className="mt-6 ml-2 bg-cyan-600 w-fit p-2 rounded-xl text-white">
        Đang Tuyển Dụng
      </div>
      <Collapse
        forceRender="true"
        size="large"
        className="mt-10 bg-orange-400"
        items={items}
        defaultActiveKey={["1"]}
        onChange={onChange}
      />
    </div>
  );
};

export default Campaigns;
