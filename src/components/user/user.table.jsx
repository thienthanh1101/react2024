import { Table } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';
const UserTable = () =>{
  const [dataUser,setDataUser]=useState([{
    _id:"1",fullName: "huy",email:"huy",phone:"090",role:"1"
  }]);
  //empty array= run one khong được sử dụng hàm async and await trong useEffect
  useEffect(()=>{
    console.log("Run useEffect 111")
    loadUser();
   },[]);
    const columns = [
    {
        title: 'Id',
        dataIndex: '_id',
      },
      {
        title: 'Full Name',
        dataIndex: 'fullName',
      },
      {
        title: 'Email',
        dataIndex: 'email',
      },
      {
        title: 'Phone',
        dataIndex: 'phone',
      },
      {
        title: 'Role',
        dataIndex: 'role',
      }
    ];
    const loadUser=async()=>{
      const res = await fetchAllUserAPI();
      setDataUser(res.data) 
    }
    console.log("run render 000:")
    return (<Table columns={columns} dataSource={dataUser}  rowKey={"_id"} />)
}
export default UserTable;