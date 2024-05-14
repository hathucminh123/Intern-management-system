// src/TaskTable.js
import React from 'react';
import { Table, Tag, Space } from 'antd';
import { CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

const TaskTable = () => {
  const columns = [
    {
      title: 'Task Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => {
        let color;
        let icon;
        if (status === 'Completed') {
          color = 'green';
          icon = <CheckCircleOutlined />;
        } else if (status === 'In Progress') {
          color = 'blue';
          icon = <ClockCircleOutlined />;
        } else {
          color = 'red';
          icon = <CloseCircleOutlined />;
        }
        return (
          <Tag icon={icon} color={color}>
            {status}
          </Tag>
        );
      },
    },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
      key: 'endDate',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Task 1',
      status: 'Completed',
      startDate: '12/3/2019',
      endDate: '12/3/2019',
    },
    {
      key: '2',
      name: 'Task 2',
      status: 'In Progress',
      startDate: '12/3/2019',
      endDate: '12/3/2019',
    },
    {
      key: '3',
      name: 'Task 3',
      status: 'Pending',
      startDate: '12/3/2019',
      endDate: '12/3/2019',
    },
    {
        key: '3',
        name: 'Task 3',
        status: 'Pending',
        startDate: '12/3/2019',
        endDate: '12/3/2019',
      },
      {
        key: '3',
        name: 'Task 3',
        status: 'Pending',
        startDate: '12/3/2019',
        endDate: '12/3/2019',
      },
      {
        key: '3',
        name: 'Task 3',
        status: 'Pending',
        startDate: '12/3/2019',
        endDate: '12/3/2019',
      },
      {
        key: '3',
        name: 'Task 3',
        status: 'Pending',
        startDate: '12/3/2019',
        endDate: '12/3/2019',
      },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default TaskTable;
