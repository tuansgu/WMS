import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

// Define a type for the customer data
interface Customer {
  CustomerID: number;
  CustomerName: string;
  Email: string;
  Phone: string;
  Address: string;
  City: string;
  State: string;
  ZipCode: string;
  Country: string;
}

const Customers = () => {
  // Use the Customer type for the state
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState<Customer | null>(null);

  const getCustomers = (page: number, limit: number) => {
    axios.get(`http://localhost:3002/customers?page=${page}&limit=${limit}`)
      .then(response => {
        setCustomers(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the customers!", error);
      });
  }

  const handleAddCustomer = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement add customer logic here
    setShowAddModal(false);
  }

  const handleEditCustomer = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement edit customer logic here
    setShowEditModal(false);
  }

  useEffect(() => {
    getCustomers(page, limit);
  }, [page, limit]);

  return (
    <>
      <div className="container" style={{ marginTop: '60px' }}>
        <div className='d-flex justify-content-center'>
          <button className="btn btn-primary mb-3 me-3" onClick={() => setShowAddModal(true)}>Add New Customer</button>
          <input type="text" className="mb-3 form-control w-50" placeholder="Search customers..." />
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className='text-center'>Name</th>
              <th className='text-center'>Email</th>
              <th className='text-center'>Phone</th>
              <th className='text-center'>Address</th>
              <th className='text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.CustomerID}>
                <td className='text-center'>{customer.CustomerName}</td>
                <td className='text-center'>{customer.Email}</td>
                <td className='text-center'>{customer.Phone}</td>
                <td className='text-center'>{customer.Address}, {customer.City}, {customer.State}, {customer.ZipCode}, {customer.Country}</td>
                <td className='text-center'>
                  <div className='d-flex justify-content-center'>
                    <button className='btn btn-secondary me-3'>Detail</button>
                    <button className='me-3 btn btn-primary' onClick={() => { setCurrentCustomer(customer); setShowEditModal(true); }}>Edit</button>
                    <button className='btn btn-danger'>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-secondary me-2' onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
          <button className='btn btn-secondary' onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </div>

      {/* Add Customer Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className='w-100 text-center'>Add New Customer</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleAddCustomer}>
          <Modal.Body>
            <Form.Group controlId="formCustomerName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" required />
            </Form.Group>
            <Form.Group controlId="formCustomerEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group controlId="formCustomerPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter phone" required />
            </Form.Group>
            <Form.Group controlId="formCustomerAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter address" required />
            </Form.Group>
            <Form.Group controlId="formCustomerCity">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter city" required />
            </Form.Group>
            <Form.Group controlId="formCustomerState">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Enter state" required />
            </Form.Group>
            <Form.Group controlId="formCustomerZipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="text" placeholder="Enter zip code" required />
            </Form.Group>
            <Form.Group controlId="formCustomerCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" placeholder="Enter country" required />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowAddModal(false)}>Close</Button>
            <Button variant="primary" type="submit">Add Customer</Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Edit Customer Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title className='w-100 text-center' >Edit Customer</Modal.Title>
        </Modal.Header>
        {currentCustomer && (
          <Form onSubmit={handleEditCustomer}>
            <Modal.Body>
              <div className='row'>
                <div className='col-6'>
                  <Form.Group controlId="formCustomerName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className='mb-3' type="text" placeholder="Enter name" defaultValue={currentCustomer.CustomerName} required />
                  </Form.Group>
                </div>
                <div className='col-6'>
                  <Form.Group controlId="formCustomerEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control className='mb-3' type="email" placeholder="Enter email" defaultValue={currentCustomer.Email} required />
                  </Form.Group>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                  <Form.Group controlId="formCustomerPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control className='mb-3' type="text" placeholder="Enter phone" defaultValue={currentCustomer.Phone} required />
                  </Form.Group>
                </div>
                <div className='col-6'>
                  <Form.Group controlId="formCustomerAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control className='mb-3' type="text" placeholder="Enter address" defaultValue={currentCustomer.Address} required />
                  </Form.Group>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                  <Form.Group controlId="formCustomerCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control className='mb-3' type="text" placeholder="Enter city" defaultValue={currentCustomer.City} required />
                  </Form.Group>
                </div>
                <div className='col-6'>
                  <Form.Group controlId="formCustomerState">
                    <Form.Label>State</Form.Label>
                    <Form.Control className='mb-3' type="text" placeholder="Enter state" defaultValue={currentCustomer.State} required />
                  </Form.Group>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                  <Form.Group controlId="formCustomerZipCode">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control className='mb-3' type="text" placeholder="Enter zip code" defaultValue={currentCustomer.ZipCode} required />
                  </Form.Group>
                </div>
                <div className='col-6'>
                  <Form.Group controlId="formCustomerCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control className='mb-3' type="text" placeholder="Enter country" defaultValue={currentCustomer.Country} required />
                  </Form.Group>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowEditModal(false)}>Close</Button>
              <Button variant="primary" type="submit">Save Changes</Button>
            </Modal.Footer>
          </Form>
        )}
      </Modal>
    </>
  );
}

export default Customers;
