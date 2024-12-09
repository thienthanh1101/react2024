import { Link} from "react-router-dom";
import {AliwangwangOutlined, AuditOutlined, HomeOutlined, LoginOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import {Menu} from "antd";
import {useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
const Header = () => {
  const [current, setCurrent] = useState('mail');
  const {user} = useContext(AuthContext);
 // console.log("check data:",user)
  const onClick = (e) => {
  // console.log('click ', e);
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
      key: "books",
      icon: <AuditOutlined/>,
    },
    // {
    //   label: "Setting",
    //   key: "setting",
    //   icon: <LoginOutlined/>,
    //   //icon: <SettingOutlined/>,
    // },
    ...(!user.id ?[{
      label: <Link to={"/login"}>Login</Link>,
          key:"login",
          icon: <LoginOutlined/>,
    }]:[]),
    
    ...(user.id ?[{
      label: `Welcome ${user.fullName}`,
      key: "setting",
      icon: <AliwangwangOutlined/>,
      children:[
        {
          label: "Logout",
          key:"logout",
        }
      ]
    }]:[]),
        
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
