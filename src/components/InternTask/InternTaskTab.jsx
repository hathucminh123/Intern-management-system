import TaskTable from "../InternTaskTable/InternTaskTable"
import React, { useState } from 'react';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';
import { Button, Input, Popover, DatePicker, Select } from 'antd';
const InternTaskTab = () => {

    const [open, setOpen] = useState(false);

    const hide = () => {
        setOpen(false);
    };

    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };
    return (
        <>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '300px', paddingBottom: '20px', marginRight: '10px' }}>
                    <Input size="large" placeholder="Search" prefix={<SearchOutlined />} />
                </div>
                <div >
                    <Popover
                        content={
                            <div>
                                <div>
                                    <Input placeholder="Task Owner" style={{ marginBottom: 10 }} />
                                </div>
                                <div>
                                    <DatePicker placeholder="Start Date" style={{ marginBottom: 10 }} />
                                </div>
                                <div>
                                    <DatePicker placeholder="End Date" style={{ marginBottom: 10 }} />
                                </div>
                                <div>
                                    <Select placeholder="Status" style={{ width: '100%', marginBottom: 10 }}>
                                        <Option value="todo">To Do</Option>
                                        <Option value="inProgress">In Progress</Option>
                                        <Option value="done">Done</Option>
                                    </Select>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'start' }}>
                                    <div style={{ marginRight:'5px'}}>
                                        <Button type="primary" onClick={hide}>Apply</Button>
                                    </div>
                                    <div>
                                        <Button type="primary" onClick={hide}>Clear</Button>
                                    </div>
                                </div>

                            </div>
                        }
                        title="Filter"
                        trigger="click"
                        open={open}
                        onOpenChange={handleOpenChange}
                    >
                        <Button type="primary" icon={<FilterOutlined />} size={'large'} onClick={{}}>
                            Add Filter
                        </Button>
                    </Popover>
                </div>
            </div>

            <TaskTable />
        </>
    )
}

export default InternTaskTab