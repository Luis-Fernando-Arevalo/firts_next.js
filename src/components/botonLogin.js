import React from "react";
import { Form, Button } from "antd";

const boton = ({
  type,
  htmlType,
  textButton,
  typeLink,
  onClick,
  textAnchor,
}) => (
  <Form.Item>
    <Button type={type} htmlType={htmlType} className="login-form-button">
      {textButton}
    </Button>
    {" "}Or{" "}
    <Button type={typeLink} onClick={onClick}>
      {textAnchor}
    </Button>
  </Form.Item>
);

export default boton;
