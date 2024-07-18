import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard';
import Order from './components/order';
import Customers from './components/Customer/customers';
import Product from './components/Inventory/products';
import WarehouseReceivingOrders from './components/Inventory/warehouseReceivingOrder';
import SendInventory from './components/Inventory/sendInventory';
import InventoryHistory from './components/Inventory/inventoryHistory';
import InventoryStatus from './components/Inventory/inventoryStatus';
import InventoryTransfers from './components/Inventory/inventoryTransfers';
import OnHoldReceiving from './components/Inventory/onHoldReceiving';
import WorkOrders from './components/Inventory/workOrders';
import Pricing from './components/pricing';
import Returns from './components/returns';
import Billing from './components/billing';
import Analytics from './components/analytics';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Navbar />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='orders' element={<Order />} />
          <Route path='customers' element={<Customers />} />
          <Route path='product' element={<Product />} />
          <Route path='warehouse-receiving-orders' element={<WarehouseReceivingOrders />} />
          <Route path='send-inventory' element={<SendInventory />} />
          <Route path='inventory-status' element={<InventoryStatus />} />
          <Route path='inventory-history' element={<InventoryHistory />} />
          <Route path='inventory-transfers' element={<InventoryTransfers />} />
          <Route path='on-hold-receiving' element={<OnHoldReceiving />} />
          <Route path='work-orders' element={<WorkOrders />} />
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
