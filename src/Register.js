import React, { useEffect, useState} from 'react';

import { Button,  Form, Input,Upload,message } from 'antd';
import { useNavigate } from 'react-router-dom';


//import { UploadOutlined } from '@ant-design/icons'
import axios from 'axios';
//import { set } from 'mongoose';

const Register = () => {

const [fileList,setFileList]=useState([])

  const handlechange =(data)=>{
   setFileList(data.fileList)
 };
 console.log(fileList?.[0]?.originFileObj);
//  values["image"]=fileList?.[0]?.originFileObj;
//   values["id"]=id;

    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const add = (async (values)=>{


      values["image"]=fileList[0]?.originalFileObj;
       axios.post("http://localhost:1008/api/v1/Myprofile/:id",{values})
       .then((res)=>{
        if(res?.data.success===true){
        // message.success(res?.data?.message);
           // formcreate.resetfields();
           // setOpenCreate(false);
           // initRender();
         }else if(res?.response?.status===500){
           message.error(res?.respones?.data?.message);
     
         }else{
           message.error(res?.data?.message);
           // setOpenCreate(false);
         }
       })
     })
const onFinish = async(values) => {
  
 // values["image"]=fileList[0]?.originalFileObj;
    const response = await  axios.post("https://mernauthontication-server.onrender.com/api/v1/register",
       values
)
    .then((response)=>{
        console.log(response);
        navigate('/Login');
    })
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


// const add = (async (values)=>{


//  values["image"]-fileList[0]?.originalFileObj;
//   axios.post("http://localhost:1008/api/v1/Myprofile/:id",{values})
//   .then((res)=>{
//    if(res?.data.success===true){
//    // message.success(res?.data?.message);
//       // formcreate.resetfields();
//       // setOpenCreate(false);
//       // initRender();
//     }else if(res?.response?.status===500){
//       message.error(res?.respones?.data?.message);

//     }else{
//       message.error(res?.data?.message);
//       // setOpenCreate(false);
//     }
//   })
// })
useEffect(()=>{
  add()
},[]);
return(
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
      ]}
    >
      <Input />
    </Form.Item>
   
    <Form.Item
      label="mobilenumber"
      name="mobilenumber"
      rules={[
        {
          required: true,
          message: 'Please input your mobilenumber!',
        },
      ]}
    >
      <Input/>
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
     <Form.Item>
     <Upload 
     
     onChange={handlechange}
     name='image'
     >
      <Button type ="primary" htmlType='submit'>Upload</Button>
      
    {/* <Button icon={<UploadOutlined />}>Click to Upload</Button> */}
  </Upload>
     </Form.Item>
   

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
)};
export default Register;

