import { Row, Col, Layout } from "antd";

export const Header = ({ children }) => (
  <Layout.Header>
    <Row justify="end">
      <Col span={2}>{children}</Col>
    </Row>
  </Layout.Header>
);
