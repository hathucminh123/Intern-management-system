import React from "react";
import { AudioOutlined } from "@ant-design/icons";
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
const SearchTraningProgramBar = () => (
  <Space direction="vertical">
    <Search
      className="w-1/2"
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="middle"
      onSearch={onSearch}
    />
  </Space>
);
export default SearchTraningProgramBar;
