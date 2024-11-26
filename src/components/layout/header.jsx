import { Link,NavLink } from "react-router-dom";
import {FolderOpenOutlined, HomeOutlined, UsergroupAddOutlined } from '@ant-design/icons';
//import "./header.css";
import {Menu} from "antd";
import { useState } from "react";
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
      icon: <FolderOpenOutlined />,
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
