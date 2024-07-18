import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faClipboardList, faBoxes, faDollarSign, faUndo, faFileInvoiceDollar, faChartBar, faSignOutAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isInventoryOpen, setIsInventoryOpen] = useState(false);

  const toggleInventory = () => {
    setIsInventoryOpen(!isInventoryOpen);
  };

  return (
    <div className="d-flex" id="wrapper">
      <div className="bg-secondary border-right text-center p-4 d-flex flex-column justify-content-between" style={{ height: '100vh', width: "15%" }} id="sidebar-wrapper">
        <div>
          <div className="bg-secondary list-group-flush">
            <span className='text-center fs-1 text-light mb-3'>EveryShip</span>
            <Link to="dashboard" className="bg-secondary list-group-item mb-4 list-group-item-action text-light text-start fs-5 mt-3">
              <FontAwesomeIcon icon={faTachometerAlt} className="me-2" /> Dashboard
            </Link>
            <Link to="customers" className="bg-secondary list-group-item mb-4 list-group-item-action text-light text-start fs-5">
              <FontAwesomeIcon icon={faUser} className="me-2" /> Customer
            </Link>
            <Link to="orders" className="bg-secondary list-group-item mb-4 list-group-item-action text-light text-start fs-5">
              <FontAwesomeIcon icon={faClipboardList} className="me-2" /> Orders
            </Link>
            <div className="list-group-item list-group-item-action mb-3 bg-secondary text-light text-start fs-5 cursor-pointer" onClick={toggleInventory}>
              <FontAwesomeIcon icon={faBoxes} className="me-2 " /> Inventory
            </div>
            {isInventoryOpen && (
              <div>
                <Link to="product" className="list-group-item list-group-item-action bg-secondary text-light ms-3 text-start mt-2 fs-5">Product</Link>
                <Link to="warehouse-receiving-orders" className="list-group-item list-group-item-action bg-secondary text-light ms-3 text-start mt-2 fs-5">Warehouse Receiving Orders</Link>
                <Link to="send-inventory" className="list-group-item list-group-item-action bg-secondary text-light ms-3 text-start mt-2 fs-5">Send Inventory</Link>
                <Link to="inventory-status" className="list-group-item list-group-item-action bg-secondary text-light ms-3 text-start mt-2 fs-5">Inventory Status</Link>
                <Link to="inventory-history" className="list-group-item list-group-item-action bg-secondary text-light ms-3 text-start mt-2 fs-5">Inventory History</Link>
                <Link to="inventory-transfers" className="list-group-item list-group-item-action bg-secondary text-light ms-3 text-start mt-2 fs-5">Inventory Transfers</Link>
                <Link to="on-hold-receiving" className="list-group-item list-group-item-action bg-secondary text-light ms-3 text-start mt-2 fs-5">On Hold Receiving</Link>
                <Link to="work-orders" className="list-group-item list-group-item-action bg-secondary text-light ms-3 text-start mt-2 fs-5 mb-3">Work Orders</Link>
              </div>
            )}
            <Link to="pricing" className="bg-secondary list-group-item mb-4 list-group-item-action text-light text-start fs-5">
              <FontAwesomeIcon icon={faDollarSign} className="me-2" /> Pricing
            </Link>
            <Link to="returns" className="bg-secondary list-group-item mb-4 list-group-item-action text-light text-start fs-5">
              <FontAwesomeIcon icon={faUndo} className="me-2" /> Returns
            </Link>
            <Link to="billing" className="bg-secondary list-group-item mb-4 list-group-item-action text-light text-start fs-5">
              <FontAwesomeIcon icon={faFileInvoiceDollar} className="me-2" /> Billing
            </Link>
            <Link to="analytics" className="bg-secondary list-group-item mb-4 list-group-item-action text-light text-start fs-5">
              <FontAwesomeIcon icon={faChartBar} className="me-2" /> Analytics
            </Link>
          </div>
        </div>
        <div className='list-group-flush'>
          <Link to="/logout" className="list-group-item list-group-item-action text-light text-start fs-5">
            <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Log Out
          </Link>
        </div>
      </div>
      <div id="page-content-wrapper" style={{ width: "100%" }}>
        <div className="container-fluid">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
