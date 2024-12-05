import { Link} from "react-router-dom";
import {AuditOutlined, HomeOutlined, SettingOutlined, UsergroupAddOutlined } from '@ant-design/icons';
//import "./header.css";
import {Menu} from "antd";
import { useState } from "react";
//import { icons } from "antd/es/image/PreviewGroup";
//import { spaceChildren } from "antd/es/button";
const Header = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const items = [
    {
      label: <Link to={"/"} >Home</Link> ,
      key: 'home',
      icon: <HomeOutlined/>,
    },
    {
      label: <Link to={"/users"}> Users </Link>,
      key: 'users',
      icon: <UsergroupAddOutlined/>,
     // disabled: true,
    },
    {
      label: <Link to={"/books"}> Books </Link>,
      key: 'books',
      icon: <AuditOutlined/>,
    },
    {
      label: "Cài đặt",
      key: "setting",
      icons: <SettingOutlined/>,
      spaceChildren: [
        {
          label: <Link to={"/login"}>Đăng nhập</Link>,
          key:"login",
        },
        {
          label: "Đăng xuất",
          key: "logout",
        }
      ]
    },
  ];
  return (
       <Menu 
       onClick={onClick} 
       selectedKeys={[current]} 
       mode="horizontal" 
       items={items} 
       />
  );
};
export default Header;
