import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Input, Popconfirm, Table } from "antd";
import SearchTraningProgramBar from "./SearchTraningProgramBar";

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const SetUpTraning = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "0",
      number: "1",
      nameCourse: "React",
      nameClass: "React01",
      attendance: "32",
      duration: "30 ngày",
      mentor: "Minh",
    },
    {
      key: "1",
      number: "2",
      nameCourse: "C#",
      nameClass: "Net01",
      attendance: "32",
      duration: "30 ngày",
      mentor: "Minh",
    },
  ]);
  const [count, setCount] = useState(2);

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const handleView = (key) => {
    console.log("View details for key:", key);
    // Implement the logic to view details here
  };

  const defaultColumns = [
    {
      title: "Number",
      dataIndex: "number",
      width: "150px",
    },
    {
      title: "NameCourse",
      dataIndex: "nameCourse",
      width: "150px",
      editable: true,
    },
    {
      title: "NameClass",
      dataIndex: "nameClass",
      width: "150px",
      editable: true,
    },
    {
      title: "Attendance",
      dataIndex: "attendance",
      width: "150px",
      editable: true,
    },
    {
      title: "Mentor",
      dataIndex: "mentor",
      width: "150px",
      editable: true,
    },
    {
      title: "Duration",
      dataIndex: "duration",
      width: "150px",
      editable: true,
    },
    {
      title: "Action",
      dataIndex: "action",
      width: "150px",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <div className="flex flex-row items-center justify-center p-auto">
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => handleDelete(record.key)}
            >
              <a className="text-red-600">Xóa</a>
            </Popconfirm>
          </div>
        ) : null,
    },
  ];

  const handleAdd = () => {
    const newData = {
      key: count,
      number: count + 1,
      nameCourse: `New Course ${count}`,
      nameClass: "New Class",
      attendance: "0",
      duration: "30 ngày",
      mentor: "New Mentor",
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };

  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  return (
    <div className="flex flex-col justify-between">
      <SearchTraningProgramBar className="w-32" />
      <Button
        className="max-w-32"
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
          marginTop: 16,
        }}
      >
        Thêm
      </Button>
      <Table
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

export default SetUpTraning;