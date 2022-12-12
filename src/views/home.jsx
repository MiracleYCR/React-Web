import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'
import { Breadcrumb, Layout } from 'antd';

import MenuComp from '@/components/menu';
import FooterComp from '@/components/footer'

const { Header, Content, Footer, Sider } = Layout;

const View = () => {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <MenuComp/>
      </Sider>

      <Layout className="site-layout">
        <Header
          style={{
            paddingLeft: '16px',
            background: '#ccc',
          }}
        >
          <Breadcrumb style={{
            lineHeight: '64px'
          }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>

        <Content
          style={{
            backgroundColor: '#ccc',
            margin: '16px 16px 0 16px'
          }}
        >
          <Outlet />
        </Content>

        <FooterComp/>
      </Layout>
    </Layout>
  );
};
export default View;