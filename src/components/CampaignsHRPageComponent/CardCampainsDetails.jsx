import React from "react";
import { Card } from "antd";
const CardCampainsDetails = () => (
  <Card bordered="true" className="w-full border-4">
    <div className="text-2xl">Frontend</div>
    <div className="mt-5">
      <div>
        <div className="font-bold">Yêu cầu</div>
        <ul className="ml-3">
          <li>+ Offline tại văn phòng 5 ngày/1 tuần</li>
          <li>
            + Sinh viên năm cuối hoặc đã tốt nghiệp ngành công nghệ thông tin
          </li>
          <li>+ Có khả năng giao tiếp tiếng Anh</li>
        </ul>
      </div>
      <div>
        <div className="font-bold">Những lợi ích khi tham gia chương trình</div>
        <ul className="ml-3">
          <li>+ Tích Lũy Kinh Nghiệm</li>
          <li>+ Xây dựng tác phong làm việc</li>
          <li>+ Nhận feedback trực tiếp từ mentor</li>
        </ul>
      </div>
      <div>
        <div className="font-bold">Địa điểm</div>
        <ul className="ml-3">
          <li>+ 123 Phạm Văn Đồng</li>
        </ul>
      </div>
      <div>
        <div className="font-bold">Thời Gian</div>
        <ul className="ml-3">
          <li>+ 8h - 17h</li>
        </ul>
      </div>
      <div>
        <div className="font-bold">Ngày bắt đầu & ngày kết thúc</div>
        <ul className="ml-3">
          <li>+ 16/3/2024 - 16/6/2024</li>
        </ul>
      </div>
    </div>
  </Card>
);
export default CardCampainsDetails;
