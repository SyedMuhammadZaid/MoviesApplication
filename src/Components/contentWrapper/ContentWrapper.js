import React from "react";
import { Row, Col } from "antd";

const ContentWrapper = ({ chlildren }) => {
  return (
    <Row
      justify="center"
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
      }}
    >
      <Col span={24}>{chlildren}</Col>
    </Row>
  );
};

export default ContentWrapper;
