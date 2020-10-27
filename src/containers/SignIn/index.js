import React, { useState, useEffect } from "react";
import { Layout, Form, Row, Col, notification } from "antd";
//components
import Buttons from "../../components/botonLogin";
import Inputs from "../../components/input";
//Router
import { useRouter } from "next/router";

const { Content } = Layout;

export default function SignIn() {
  const router = useRouter();
  const [data, setData] = useState(false);

  const goContainerLogin = () => {
    router.push("login");
  };

  const doSingIn = (values) => {
      setData(true);
      if (data) {          
          notification["success"]({
            message: "WOW!!",
            style: {
              width: 600,
            },
            description: `Bienbenido a FatCat ${values.nombre} ${values.apellido} tienes ${values.edad} asi que tienes que comer los mismos platos que tu edad`,
          });
      }
  };

  useEffect(() => {
    console.log("estas SingIn");
  }, [])

  return (
    <Layout style={{ height: "100%", width: "100%", justifyContent: "center" }}>
      <Content style={{ paddingTop: "11%", paddingBottom: "10%" }}>
        <view>
          <Row>
            <Col span={6} offset={6}>
              <div style={{ paddingBottom: "10%" }}>
                <h1>Register</h1>
                <h3>We are cool...</h3>
              </div>
              <Form onFinish={doSingIn}>
                <Inputs
                  name={"nombre"}
                  required={"true"}
                  message={"Ingrese su nombre"}
                  placeholder={"Ingrese su nombre"}
                  type={"text"}
                />
                <Inputs
                  name={"apellido"}
                  required={"true"}
                  message={"Ingrese su apellido"}
                  placeholder={"Ingrese su apellido"}
                  type={"text"}
                />
                <Inputs
                  name={"edad"}
                  required={"true"}
                  message={"Ingrese una edad"}
                  placeholder={"Ingrese su edad"}
                  type={"numeric"}
                />
                <Inputs
                  name={"email"}
                  required={"true"}
                  message={"Ingrese una direccion valida"}
                  placeholder={"Ingrese su correo electronico"}
                  type={"email"}
                />
                <Buttons
                  type={"danger"}
                  htmlType={"submit"}
                  textButton={"Registrarse"}
                  textAnchor={"Iniciar Sesion"}
                  typeLink={"link"}
                  onClick={goContainerLogin}
                />
              </Form>
            </Col>
            <Col>
              {/* <Images Img={Img} /> */}
              <img
                src="/assets/Cat.png"
                alt="loader"
                style={{ width: "80%" }}
              />
            </Col>
          </Row>
        </view>
      </Content>      
    </Layout>
  );
}
