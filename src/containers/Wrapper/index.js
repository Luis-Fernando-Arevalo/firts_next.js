import React from "react";
import { Layout } from "antd";
import Footers from "../../components/footer";
import Headers from "../../components/header";

const { Content } = Layout;

export default function Wrapper({Contenido}) {
  return (
    <Layout className="layout">
      <Headers />
      <Content>
          {Contenido}
      </Content>
      <Footers />
    </Layout>
  );
}
