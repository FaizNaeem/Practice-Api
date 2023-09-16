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
  
      <Sider style={{color:'white', background:'white'}}
        breakpoint="lg"
        collapsedWidth="0"
        
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        >
        <div className="demo-logo-vertical"style={{color:'black'}} >
         <div style={{display:'flex', flexDirection:'column'}}>
          <h3 align="center" style={{color:"green"}}>Filter</h3>
         <div className="input-group gh mb-3 ">
  <input type="text" className="form-control" placeholder="Filter" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    <span className="input-group-text bg-primary" style={{color:'white'}} id="basic-addon2"><i className="fa-solid fa-magnifying-glass"></i></span>
  </div>
</div>

  <h3 align="center" className='mt-3' style={{color:"green"}}>Price</h3>
  <div className="custom-control custom-radio" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
  
  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
  <label className="custom-control-label" style={{marginLeft:"20px"}} for="customRadio1"><i className="fa-solid fa-greater-than"></i> 100 </label>
</div> 

<div className="custom-control custom-radio" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
  
  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
  <label className="custom-control-label" style={{marginLeft:"20px"}} for="customRadio1"><i className="fa-solid fa-greater-than"></i> 200 </label>
</div> 

<div className="custom-control custom-radio" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
  
  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
  <label className="custom-control-label" style={{marginLeft:"20px"}} for="customRadio1"><i className="fa-solid fa-greater-than"></i> 300 </label>
</div> 

<div className="custom-control custom-radio" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
  
  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
  <label className="custom-control-label" style={{marginLeft:"20px"}} for="customRadio1"><i className="fa-solid fa-greater-than"></i> 400 </label>
</div> 
<h3 align="center" className='mt-3' style={{color:"green"}}>Sort By</h3>
<div className="custom-control custom-radio" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
  
  <input
   type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
  <label className="custom-control-label" style={{marginLeft:"10px", marginRight:'10px'}} for="customRadio1"> H T O L </label>
  <input
   type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
  <label className="custom-control-label" style={{marginLeft:"10px"}} for="customRadio1"> L T O  H </label>
  
</div> 
<h5 align="center" className='mt-3' style={{color:"green"}}>Sort By Categories</h5>

<div className="custom-control custom-radio" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
  
  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
  <label className="custom-control-label" style={{marginLeft:"20px"}} for="customRadio1"> Mobile </label>
</div> 
<div className="custom-control custom-radio" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
  
  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
  <label className="custom-control-label" style={{marginLeft:"20px"}} for="customRadio1"> Laptop </label>
</div> 
<div className="custom-control custom-radio" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
  
  <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
  <label className="custom-control-label" style={{marginLeft:"20px", marginRight:'8px'}} for="customRadio1"> Cards </label>
</div> 

         </div>
          </div>
    
      </Sider>
  
   
      <Layout>
        <div style={{
              padding: 0,
              background: colorBgContainer,
              
            }} className='mt-2 '>
                <div className="center" >
                    <label htmlFor="">
                        Title
<div className="input-group  mb-3 mt-2 ">
  
  <input type="text" className="form-control" placeholder="Title" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
                    </label>
                    <label htmlFor="">
                        Image
<div className="input-group  mb-3 mt-2 ">
  
  <input type="File" className="form-control fil" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
</label>
<label htmlFor="">
                        Price
<div className="input-group  mb-3 mt-2 ">
  
  <input type="text" className="form-control" placeholder="Price" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
</label>

                </div>
                <div className="center">
                <label htmlFor="">
                        Category
                <div class="input-group  mb-3 mt-2">
 
  <input type="text" class="form-control" placeholder="Category" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
</label>
<label htmlFor="">
                        Description
<div class="input-group  mb-3 mt-2">
 
  <input type="text" class="form-control" placeholder="Description" aria-label="Username" aria-describedby="basic-addon1"/>
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