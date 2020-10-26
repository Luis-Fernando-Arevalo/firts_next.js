import React from "react";
import { Form, Input } from "antd";

const input = ({ name, required, message, placeholder, prefix, type }) => (
  <Form.Item
    name={name}
    rules={[
      {
        required: { required },
        message: { message },
      },
    ]}
  >
    <Input prefix={prefix} placeholder={placeholder} type={type} />
  </Form.Item>
);

export default input;
