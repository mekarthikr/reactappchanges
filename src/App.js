import './App.css';
import { Outlet, Route,Routes } from 'react-router-dom';
import About from './components/about';
import {Home} from './components/home';
import Navbar from './components/navbar';
import { OrderSummary } from './components/OrderSummary';

function App() {
  return (
    <>
    <Navbar/> 
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  {/* <Route path='/' element={<Home/>}/> */}
  <Route path='/order-summary' element={<OrderSummary/>}/>
</Routes> 
</>
  );
}

export default App;
