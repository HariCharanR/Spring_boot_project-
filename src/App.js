import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './Home';
import ToyForm from './ToyForm';

import OrdersForm from './OrdersForm';
import Orders from './Orders';
import CustomerForm from './CustomerForm';
import Customers from './Customers';
import OrdersForm1 from './OrdersForm1';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add-toy" element={<ToyForm/>}/>
      <Route path="/:id/update-toy" element={<OrdersForm/>}/>
      <Route path="/orders" element={<Orders />}/>
      <Route path="/create-customer" element={<CustomerForm/>}/>
      <Route path="/customers" element={<Customers/>}/>
      <Route path="/create-order" element={<OrdersForm1 />} />
    </Routes>
       
    </BrowserRouter>
  );
}

export default App;
