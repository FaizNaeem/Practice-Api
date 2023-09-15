import React ,{useState,useEffect}from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const Card1 = () => {
    let [users, Setusers] = useState([]);
  
  useEffect(() => {
  fetch('https://dummyjson.com/products/1')
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
        Setusers(data.products);
      console.log(data);
    })
    .catch((e) => {
      console.log(e);
    });
  }, []);
    return(
        <>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', width: '100%' }} className='my-5'>
{/* {users.map((item) => (
    <div className="news-card">
    <img src={item.thumbnail} alt="" />
    <h2>{item.title}</h2>
    <p>{item.description}</p>
    {/* Add other fields you want to display */}

        {/* </div> */}
    {/* //   ))} */} 
    {/* /} */}
        <Card 
                 style={{
                    width: 300,
                    
                    marginBottom: 25,
                    height: 330,
                }}
                
                cover={
        <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
    }
    actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
    ]}
    >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Card title"
      description="This is the description"
      />
  </Card>
  <Card 
                 style={{
                    width: 300,
                  
                    marginBottom: 25,
                    height: 330,
                }}
                
                cover={
        <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
    }
    actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
    ]}
    >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Card title"
      description="This is the description"
      />
  </Card>
  <Card 
                 style={{
                    width: 300,
                   
                    marginBottom: 25,
                    height: 330,
                }}
                
                cover={
        <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
    }
    actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
    ]}
    >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Card title"
      description="This is the description"
      />
  </Card>
  <Card 
                 style={{
                    width: 300,
                    marginTop: 25,
                    marginBottom: 25,
                    height: 330,
                }}
                
                cover={
        <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
    }
    actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
    ]}
    >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Card title"
      description="This is the description"
      />
  </Card>
  <Card 
                 style={{
                    width: 300,
                    marginTop: 25,
                    marginBottom: 25,
                    height: 330,
                }}
                
                cover={
        <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
    }
    actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
    ]}
    >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Card title"
      description="This is the description"
      />
  </Card>
  <Card 
                 style={{
                    width: 300,
                    marginTop: 25,
                    marginBottom: 25,
                    height: 330,
                }}
                
                cover={
        <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
    }
    actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
    ]}
    >
    <Meta
      avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title="Card title"
      description="This is the description"
      />
  </Card>
      </div>
      </>
)
}
;
export default Card1;