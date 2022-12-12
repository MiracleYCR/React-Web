import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import { Breadcrumb, Layout, Menu } from 'antd';

import getMenuList from '@/menus'

const { Header, Content, Footer, Sider } = Layout;

const View = () => {
  const navigateTo = useNavigate()

  const [collapsed, setCollapsed] = useState(false);

  const menuClick = (e) => {
    navigateTo(e.key)
  }

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
        <Menu
          theme="dark"
          mode="inline"
          items={getMenuList()}
          defaultSelectedKeys={['/video']}
          onClick={menuClick}
        ></Menu>
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

        <Footer
          style={{
            padding: 0,
            lineHeight: '48px',
            textAlign: 'center',
          }}
        >
          Miracle / Copyright © 2022 / 备案号: 粤ICP备2022006448号-1
        </Footer>
      </Layout>
    </Layout>
  );
};
export default View;