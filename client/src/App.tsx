import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';
import Order from './components/order';
import Customers from './components/Customer/customers';
import Inventory from './components/inventory';
import Pricing from './components/pricing';
import Returns from './components/returns';
import Billing from './components/billing';
import Analytics from './components/analytics';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='/home' element={<Navbar />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='orders' element={<Order />} />
          <Route path='customers' element={<Customers />} />
          <Route path='inventory' element={<Inventory />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='returns' element={<Returns />} />
          <Route path='billing' element={<Billing />} />
          <Route path='analytics' element={<Analytics />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
