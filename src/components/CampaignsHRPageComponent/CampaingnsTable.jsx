import React from "react";
import { Space, Table, Tag } from "antd";

const columns = [
  {
    title: "Tên",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Trường",
    dataIndex: "school",
    key: "school",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Trạng Thái",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color;
          switch (tag) {
            case "Chờ":
              color = "gray";
              break;
            case "Hủy":
              color = "red";
              break;
            case "Chấp nhận":
              color = "green";
              break;
            default:
              color = "geekblue";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    school: "FPT",
    email: "john.brown@example.com",
    tags: ["Chờ"],
  },
  {
    key: "2",
    name: "Jim Green",
    school: "FPT",
    email: "jim.green@example.com",
    tags: ["Hủy"],
  },
  {
    key: "3",
    name: "Joe Black",
    school: "FPT",
    email: "joe.black@example.com",
    tags: ["Chấp nhận"],
  },
];

const CampaignsTable = () => <Table columns={columns} dataSource={data} />;

export default CampaignsTable;
