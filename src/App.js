//import logo from './logo.svg';
import './App.css';
import { Routes,Route} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Home from './Home'
// import Page from './Page';



function App() {
  const gettoken = document.cookie;
  return (
    <div className="App">
     <Routes>
      <Route path='/'element={<Register/>}/>
      <Route path='/Login'element={<Login/>}/>
      {console.log(gettoken)}
      <Route path='/Home'element={<Home/>}/>
   
     </Routes>
    </div>
  );
}

export default App;
