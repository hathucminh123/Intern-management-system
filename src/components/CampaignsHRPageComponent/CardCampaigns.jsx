import React from "react";
import { Card, Col, Row } from "antd";
const CardCampaigns = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card className="m-5" title="Tích lũy kinh ngiệm" bordered={true}>
        Được trải nghiệm môi trường làm việc thực tế
      </Card>
    </Col>
    <Col span={8}>
      <Card
        className="m-5"
        title="Nhận Feedback trực tiếp từ mentor"
        bordered={true}
      >
        Được trải nghiệm môi trường làm việc thực tế
      </Card>
    </Col>
    <Col span={8}>
      <Card className="m-5" title="Xây dựng tác phong làm việc" bordered={true}>
        Được trải nghiệm môi trường làm việc thực tế
      </Card>
    </Col>
  </Row>
);
export default CardCampaigns;
