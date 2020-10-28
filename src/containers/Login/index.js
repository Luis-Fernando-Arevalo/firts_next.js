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
  const [logged, setLogged] = useState(false);
  const router = useRouter();

  const goContainerSignIn = () => {
    router.push("/signIn");
  };

  const doLogin = async (inputs) => {
    const url = "https://dbcolegios.blockchainconsultora.com/users/login";
    const form = {
      email: inputs.email,
      password: inputs.password,
      societyId: "fafc7359-0139-43d7-9d00-1828d90cc407",
    };
    const option = {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const request = await fetch(url, option)
      .then((values) => values.json())
      .catch((err) => err.json());
    
    if(request.token ){
      notification["success"]({
        message: "Iniciaste secion",
        style: {
          width: 600,
        },
        description: `Iniciaste sesion y tu token es: ${request.token}`,
      });
    }else{
      notification["warning"]({
        message: "Error de usuario o clave sesion",
        style: {
          width: 600,
        },
        description: "Error al iniciar sesion",
      });
    }
  };

  return (
    <Layout style={{ height: "100%", width: "100%", justifyContent: "center" }}>
      <Content style={{ paddingTop: "11%", paddingBottom: "10%" }}>
        <Row>
          <Col offset={4}>
            <img src="/assets/cat2.png" alt="loading" />
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
    </Layout>
  );
};

export default index;
