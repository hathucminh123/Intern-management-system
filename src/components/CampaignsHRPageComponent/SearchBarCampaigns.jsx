import React from "react";
import { AudioOutlined, FilterOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const onSearch = (value, _e, info) => console.log(info?.source, value);

const SearchBarCampaigns = () => (
  <Space direction="vertical" className="flex flex-row items-center">
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{
        width: 300,
      }}
    />
    <FilterOutlined
      style={{
        marginLeft: "10px",
        fontSize: "20px",
      }}
    />
  </Space>
);

export default SearchBarCampaigns;
