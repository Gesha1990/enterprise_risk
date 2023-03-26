import { Form, Input, Button, Row, Col, Layout, Card } from "antd";
import { useNavigate, useLocation } from "react-router";
import { useEffect } from "react";
import { path } from "ramda";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Header } from "@/UI/Header/index";

const { Content } = Layout;

const AuthPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onFinish = (data) => {
    localStorage.setItem("login", data);
    navigate("/");
  };
  return (
    <Layout>
      <Header />
      <Content style={{ height: "94vh" }}>
        <Row align="bottom" justify="center">
          <Col xs={24} sm={24} md={16} lg={16} xl={10} xxl={7}>
            <Card title={"Sign In"} style={{ margin: "50% 10%" }}>
              <Form
                name="normal_login"
                className="login-form"
                wrapperCol={{ flex: "auto" }}
                onFinish={onFinish}
              >
                <Form.Item
                  name="nickname"
                  rules={[
                    { required: true, message: "Please input your Nick name!" },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Nick"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    { required: true, message: "Please input your Password!" },
                  ]}
                >
                  <Input.Password
                    placeholder="Password"
                    prefix={<LockOutlined className="site-form-item-icon" />}
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" block={true}>
                    Log in
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default AuthPage;
