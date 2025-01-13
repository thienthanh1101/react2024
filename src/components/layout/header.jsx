import { Link, useLocation, useNavigate} from "react-router-dom";
import {AliwangwangOutlined, AuditOutlined, HomeOutlined, LoginOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import {Menu, message} from "antd";
import {useContext, useState,useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import { logoutAPI } from "../../services/api.service";
const Header = () => {
  const [current, setCurrent] = useState('mail');
  const {user, setUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const location= useLocation();

  useEffect(() => {
    //console.log(">>>Check Location",location)
    if (location && location.pathname) {
        const allRoutes = ["users", "books"];
        const currentRoute = allRoutes.find(item => `/${item}` === location.pathname);
        if (currentRoute) {
            setCurrent(currentRoute);
        } else {
            setCurrent("home");
        }
    }
}, [location])
 // console.log("check data:",user)
  const onClick = (e) => {
  // console.log('click ', e);
    setCurrent(e.key);
  };
  const handleLogout=async()=>{
    const res = await logoutAPI();
    if(res.data){
      //clear data
      localStorage.removeItem("access_token");
      setUser({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: ""
      })
      message.success("Logout success");
      //redirect User to homepage
      navigate("/");
    }
  }
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
          label: <span onClick={()=> handleLogout()}>Logout</span>,
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
