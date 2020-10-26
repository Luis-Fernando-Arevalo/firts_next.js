import React, { useEffect, useState } from "react";
import { Form, Layout, Row, Col, notification } from "antd";
//Router
import { useRouter } from "next/router";
// Components
import Buttons from "../../components/botonLogin";
import Inputs from "../../components/input";
import Footers from '../../components/footer'
//Icons
import { UserOutlined } from "@ant-design/icons";
import { LockOutlined } from "@ant-design/icons";
//layouts
const { Content } = Layout;

const index = () => {
  const [logged, setLogged] = useState(false);
  const router = useRouter();
  const goContainerSignIn = () => {
    router.push("/signIn");
  };
  const doLogin = (values) => {
    setLogged(true);
    if (logged == true) {
      notification["success"]({
        message: "WOW!!",
        style: {
          width: 600,
        },
        description: values.email + "  haz iniciado sesion en FatCat...",
      });
    }
  };

  useEffect(() => {
    console.log("estas Login");
  }, [])

  return (
    <Layout style={{ height: "100%", width: "100%", justifyContent: "center" }}>
      <Content style={{ paddingTop: "11%", paddingBottom: "10%" }}>
        <Row>
          <Col offset={4}>
            <img src="/assets/cat2.png" alt="loading"/>
          </Col>
          <Col span={6} offset={1}>
            <div style={{ paddingBottom: "10%" }}>
              <h1>Log-In</h1>
              <h3>Let's Eat</h3>
            </div>
            <Form onFinish={doLogin}>
              <Inputs
                name={"email"}
                required={"true"}
                message={"Ingrese una direccion valida"}
                placeholder={"Ingrese su correo electronico"}
                prefix={<UserOutlined className="site-form-item-icon" />}
                type={"email"}
              />
              <Inputs
                name={"password"}
                required={"true"}
                message={"Ingrese una clave valida"}
                placeholder={"Ingrese su clave"}
                prefix={<LockOutlined className="site-form-item-icon" />}
                type={"password"}
              />
              <Buttons
                type={"primary"}
                htmlType={"submit"}
                textButton={"Iniciar Sesion"}
                textAnchor={"Registrate ahora"}
                typeLink={"link"}
                onClick={goContainerSignIn}
              />
            </Form>
          </Col>
        </Row>
      </Content>
      <Footers/>
    </Layout>
  );
};

export default index;

