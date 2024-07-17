import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUsers, faBox, faDollarSign, faUndo, faFileInvoiceDollar, faChartBar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div>
      <div className="d-flex" id="wrapper">
        <div className="bg-secondary border-right text-center p-4 d-flex flex-column justify-content-between" style={{ height: '100vh', width: "15%" }} id="sidebar-wrapper">
          <div>
            <div className="bg-secondary list-group-flush ">
              <span className='text-center fs-1 text-light mb-3'>
                EveryShip
              </span>
              <Link to="/home/dashboard" className="bg-secondary list-group-item mb-4 list-group-item-action text-light text-start fs-5 mt-3">
                <FontAwesomeIcon icon={faTachometerAlt} className="me-2" /> Dashboard
              </Link>
              <Link to="/home/customers" className="bg-secondary list-group-item mb-4 list-group-item-action text-light text-start fs-5">
                <FontAwesomeIcon icon={faUsers} className="me-2" /> Customer
              </Link>
              <Link to="/home/orders" className="bg-secondary list-group-item mb-4 list-group-item-action text-light text-start fs-5">
                <FontAwesomeIcon icon={faBox} className="me-2" /> Orders
              </Link>
              <Link to="/home/inventory" className="bg-secondary list-group-item mb-4 list-group-item-action text-light text-start fs-5">
                <FontAwesomeIcon icon={faBox} className="me-2" /> Inventory
              </Link>
              <Link to="/home/pricing" className="bg-secondary list-group-item mb-4 list-group-item-action text-light text-start fs-5">
                <FontAwesomeIcon icon={faDollarSign} className="me-2" /> Pricing
              </Link>
              <Link to="/home/returns" className="bg-secondary list-group-item mb-4 list-group-item-action text-light text-start fs-5">
                <FontAwesomeIcon icon={faUndo} className="me-2" /> Returns
              </Link>
              <Link to="/home/billing" className="bg-secondary list-group-item mb-4 list-group-item-action text-light text-start fs-5">
                <FontAwesomeIcon icon={faFileInvoiceDollar} className="me-2" />Billing
              </Link>
              <Link to="/home/analytics" className="bg-secondary list-group-item mb-4 list-group-item-action text-light text-start fs-5">
                <FontAwesomeIcon icon={faChartBar} className="me-2" /> Analytics
              </Link>
            </div>
          </div>
          <div className=' list-group-flush'>
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
    </div>
  );
}

export default Navbar;
