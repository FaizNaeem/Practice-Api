import React from 'react'
import './Api.css'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Navbar from './Navbar';
import Card from './Card';
const { Header, Content, Footer, Sider } = Layout;
const Api = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
   
    <Navbar />

    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
            (icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `nav ${index + 1}`,
            }),
          )}
        />
      </Sider>
      <Layout>
        <div style={{
              padding: 0,
              background: colorBgContainer,
              
            }} className='mt-2 '>
                <div className="center">
                    <label htmlFor="">
                        Title
<div className="input-group mb-3 mt-3 ">
  
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
                    </label>
                    <label htmlFor="">
                        Image
<div className="input-group mb-3 mt-3 ">
  
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
</label>
<label htmlFor="">
                        Price
<div className="input-group mb-3 mt-3 ">
  
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
</label>

                </div>
                <div className="center">
                <label htmlFor="">
                        Category
                <div class="input-group mb-3 mt-3">
 
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
</label>
<label htmlFor="">
                        Description
<div class="input-group mb-3 mt-3">
 
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
</label>
<button className='btn h btn-success '>Add/Edit Service</button>
                </div>
        </div>
      
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Card/>
           
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    </>
  );
};
export default Api;