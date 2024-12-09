import UserForm from "../components/user/user.form";
import UserTable from "../components/user/user.table";
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../services/api.service';

const UserPage = () => {
  const [dataUser,setDataUser]=useState([]);
  const [current,setCurrent]=useState(1);
  const [pageSize,setPageSize]=useState(5);
  const [total,setTotal] =useState(0);
  //empty array => run one. không được sử dụng hàm async and await trong useEffect
  //not empty => next value != pre value
  useEffect(()=>{
    loadUser();
  },[current]); //[]+condition
  const loadUser=async()=>{
    const res = await fetchAllUserAPI(current,pageSize);
    if(res.data){
      setDataUser(res.data.result);
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);
    }
    
  }
  //console.log("Check pageSize",pageSize)
  //lift-up state <>pull up
  return (<div style={{padding:"20px"}}>
      <UserForm loadUser={loadUser}/>
      <UserTable 
      dataUser={dataUser}
      loadUser={loadUser}
      current={current}
      pageSize={pageSize}
      total={total}
      setCurrent={setCurrent}
      setPageSize={setPageSize}
      />
  </div>)
};
export default UserPage;
