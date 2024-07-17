import React from 'react';
import { Link } from 'react-router-dom';
import { Chart } from 'react-google-charts';

const dashboard = () => {
  return (
    <div className="container" style={{marginTop: '60px'}}>
      <h2 className="mb-4">Statistics</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h5 className="card-title">Total Customers</h5>
              <p className="card-text fs-3">150</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card bg-success text-white">
            <div className="card-body">
              <h5 className="card-title">Total Orders</h5>
              <p className="card-text fs-3">320</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card bg-warning text-white">
            <div className="card-body">
              <h5 className="card-title">Total Inventory</h5>
              <p className="card-text fs-3">5600</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card bg-danger text-white">
            <div className="card-body">
              <h5 className="card-title">Pending Returns</h5>
              <p className="card-text fs-3">45</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
      <h2 className="mb-4">Chart</h2>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Statistics</h5>
              <Chart
                chartType="PieChart"
                data={[
                  ['Order Status', 'Count'],
                  ['Completed', 320],
                  ['Pending', 60],
                  ['Cancelled', 20],
                ]}
                options={{ title: 'Order Status' }}
                width="100%"
                height="400px"
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Inventory Levels</h5>
              <Chart
                chartType="BarChart"
                data={[
                  ['Product', 'Quantity'],
                  ['Product A', 1000],
                  ['Product B', 450],
                  ['Product C', 800],
                ]}
                options={{ title: 'Inventory Levels' }}
                width="100%"
                height="400px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
