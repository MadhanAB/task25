import React from 'react';
import { Button,  Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
const navigate = useNavigate()

axios.defaults.withCredentials = true;
const onFinish =  (values) => {
 axios.post("https://mernauthontication-server.onrender.com/api/v1/login",{
        email:values.email,
        password:values.password
    })
    .then((response)=>{
        console.log(response);
        if(response.data.status===200){
        alert(response.data.message)
        navigate('/Home')}
    })
 // console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

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
      label="email"
      name="email"
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
export default Login;
