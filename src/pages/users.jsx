import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../services/api.service';

const UserPage = () => {
  const [dataUser,setDataUser]=useState([]);
  //empty array= run one khong được sử dụng hàm async and await trong useEffect
  useEffect(()=>{
    loadUser();
   },[]);
   const loadUser=async()=>{
    const res = await fetchAllUserAPI();
    setDataUser(res.data) 
  }
  //lift-up state <>pull up
  return (<div style={{padding:"20px"}}>
      <UserForm loadUser={loadUser}/>
      <UserTable 
      dataUser={dataUser}
      loadUser={loadUser}
      /> 
  </div>)
};
export default UserPage;
