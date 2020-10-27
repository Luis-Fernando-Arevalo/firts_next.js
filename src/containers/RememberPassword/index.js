import React, { useEffect, useState } from "react";
import { Form, Layout, Row, Col, notification } from "antd";
//Router
import { useRouter } from "next/router";
// Components
import Buttons from "../../components/botonLogin";
import Inputs from "../../components/input";
//Icons
import { UserOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons";
//layouts
const { Content } = Layout;

const index = () => {
    const router = useRouter();

    const goBack = () =>{
        router.push('/login');
    };


  return (
    <Layout style={{ height: "100%", width: "100%", justifyContent: "center" }}>
      <Content style={{ paddingTop: "11%", paddingBottom: "10%" }}>
        <Row>
          <Col offset={4}>
            <img src="/assets/cat3.png" alt="loading" />
          </Col>
          <Col span={6} offset={1}>
            <div style={{ paddingBottom: "10%" }}>
              <h1>Ups... te olvidaste tu contraseña???</h1>
              <h3>No te preocupes recupera la aca</h3>
            </div>
            <Form>
              <Inputs
                name={"email"}
                required={"true"}
                message={"Ingrese una direccion valida"}
                placeholder={"Ingrese su correo electronico"}
                prefix={<UserOutlined className="site-form-item-icon" />}
                type={"email"}
              />
              <Buttons
                type={"primary"}
                htmlType={"submit"}
                textButton={"Enviar"}
                textAnchor={"Regresar"}
                typeLink={"danger"}
                onClick={goBack}
              />
            </Form>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default index;
