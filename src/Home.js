import { message ,Button} from 'antd';
import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';



const Home = () => {
  const navigate = useNavigate();
  const [userdata,setuserdata]=useState([])


axios.defaults.withCredentials = true;
const getusers = ()=>{axios.get("https://mernauthontication-server.onrender.com/api/v1/Myprofile")

.then((response)=>{
 setuserdata(response.data.data);
}).catch((err)=>{
  message.error(err.response.data.message)
  navigate('/')
})}
const Logout =()=>{
  axios.post("https://mernauthontication-server.onrender.com/api/v1/logout")
  .then((res)=>{
    message.success(res.data.message);
    navigate("/")
  })
  .catch((err)=>{
    message.error(err.response.data.message);
    navigate("/")
  });
}
useEffect(()=>{
   getusers()
},[])
  return (
    <div>welcome {userdata.username}
    
    <Button onClick = {()=> Logout()}>
      Logout
    </Button>
    </div>
   
  )
}

export default Home