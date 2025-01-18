import './MainLayout.css';
import React from 'react';
import 'antd/dist/reset.css';


import { Layout, Typography, Row, Col, Input, Select } from 'antd';
import Navbar from '../../components/Navbar/Navbar';
import PackageForm from '../../components/PackageForms/PackageForms';

const { Content } = Layout;
const { Title, Text } = Typography;
import { Outlet } from 'react-router-dom';
import OrderForm from '../../components/OrdenForms/OrdenForms';

const MainLayout = ({ children }) => {

  return (
    <Layout>
      <Navbar />

      <Content className="content">
        <Row justify="center">
          <Col span={18}>
            <Title level={1} className="main-title">Crea una orden</Title>
            <Text className="description">
              Dale una ventaja competitiva a tu negocio con entregas <Text strong className="accent">el mismo día</Text> (Área Metropolitana) y <Text strong className="accent">el día siguiente</Text> a nivel nacional.
            </Text>
            <Outlet />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default MainLayout;
