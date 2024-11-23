import { Space, Table, Tag } from 'antd';
import { fetchAllUserAPI } from '../../services/api.service';
import { useState } from 'react';
const UserTable = () =>{
  const [dataUser,setDataUser]=useState([{
    _id:"1",fullName: "huy",email:"huy",phone:"090",role:"1"
  }]);
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
      //setDataUser(res.data)
    }
    loadUser()
    console.log("run render:")
    return (<Table columns={columns} dataSource={dataUser} />)
}
export default UserTable;