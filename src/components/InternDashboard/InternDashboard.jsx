import TaskTable from "../InternTaskTable/InternTaskTable";
import { Col, Row, Card, Flex, Typography, Progress, } from 'antd';
import { SyncOutlined, ClockCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';

const InternDashBoard = () => {

    var inProgressTask = 4
    var todoTask = 8
    var completedTask = 7
    var totalTask = 19

    const undoneTask = inProgressTask + todoTask
    const percent = Math.round((completedTask / totalTask) * 100)

    // const cardStyle = {
    //     height: 200
    // };

    const cardStyle = {
        height: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '24px',
    };

    const gradientStyles = {
        inProgress: {
            background: 'linear-gradient(45deg, #00c6ff, #0072ff)',
        },
        pending: {
            background: 'linear-gradient(45deg, #e0e0e0, #5a5a5a)',
        },
        completed: {
            background: 'linear-gradient(45deg, #b2ffb2, #66ff66)',
        },
    };

    const CardContent = ({ count, status, icon, style }) => (
        <Card style={{ ...cardStyle, ...style }}>
            {icon} {count} {status}
        </Card>
    );

    return (
        <>
            <Typography.Title level={2} strong>
                Task Status
            </Typography.Title>
            <Row gutter={[16, 100]} style={{ marginBottom: '50px' }}>

                <Col span={8}>
                    <CardContent
                        count="4"
                        status="In Progress"
                        icon={<SyncOutlined style={{ fontSize: '32px' }} />}
                        style={gradientStyles.inProgress}
                    />
                </Col>
                <Col span={8}>
                    <CardContent
                        count="8"
                        status="Pending"
                        icon={<ClockCircleOutlined style={{ fontSize: '32px' }} />}
                        style={gradientStyles.pending}
                    />
                </Col>
                <Col span={8}>
                    <CardContent
                        count="7"
                        status="Completed"
                        icon={<CheckCircleOutlined style={{ fontSize: '32px' }} />}
                        style={gradientStyles.completed}
                    />
                </Col>
            </Row>

            <Row gutter={[40, 100]}>
                <Col span={8}>
                    <div>

                        <Card style={{ height: 260, width: '100%', }}>
                            <Typography.Title level={2} strong>
                                Task Progress
                            </Typography.Title>
                            <Progress style={{ display: 'flex', justifyContent: 'center' }} size={200} type="circle" percent={percent} format={(percent) => `${percent}% Complete`} />
                        </Card>
                    </div>
                </Col>
                <Col span={16} >
                    <Card>
                        <Typography.Title level={2} strong>
                            Recent Task
                        </Typography.Title>

                        <TaskTable />
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default InternDashBoard;