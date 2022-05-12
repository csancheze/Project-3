import React from "react";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/loginUser.css";
import { Form, Input, Button, Checkbox } from "antd";
import Auth from "../utils/auth";
import { LOGIN_PETOWNER } from "../utils/mutations";
import { useMutation } from "@apollo/client";

const LoginUser = () => {
  const [login, { error, data }] = useMutation(LOGIN_PETOWNER);
  // console.log(error + data);

  const onFinish = async (values) => {
    console.log("Success:", values);
    try {
      const { data } = await login({
        variables: { ...values },
      });

      Auth.login(data.login.token);
    } catch (e) {
      alert("Failed to login!");
      console.error(e);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Container className="d-flex justify-content-between m-0">
      <Row>
        <Col sm={12} md={6} lg={9} className="p-0">
          <img
            id="golden"
            src={require("../images/puppy.jpeg")}
            alt="golden-retriever"
          ></img>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <Form
            name="basic"
            className="form"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button id="submit-button" type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
            <NavLink id="message" to="/signup-user">
              {" "}
              Don't have an account? Sign up
            </NavLink>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginUser;
