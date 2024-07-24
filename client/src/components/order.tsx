import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

interface Item {
  id: number;
  name: string;
  sku: string;
  platform: string;
  quantity: number;
  lot: string;
  expiration: string;
}

const Order: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Item[]>([]);
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    // Simulate search results
    const results: Item[] = [
      { id: 1, name: 'Item 1', sku: 'SKU1', platform: 'Platform A', quantity: 10, lot: 'Lot1', expiration: '2024-12-31' },
      { id: 2, name: 'Item 2', sku: 'SKU2', platform: 'Platform B', quantity: 20, lot: 'Lot2', expiration: '2025-06-30' },
    ].filter(item => item.name.toLowerCase().includes(term.toLowerCase()) || item.id.toString().includes(term));
    setSearchResults(results);
  };

  const handleSelectItem = (item: Item) => {
    setSelectedItems(prevSelected => [...prevSelected, item]);
    setSearchResults([]);  // Hide search results
  };

  const handleSave = () => {
    setCurrentStep(prevStep => prevStep + 1);
    
  };

  return (
    <>
      <div style={{ backgroundColor: '#E7E9EB', height: '100vh', overflow: 'auto' }} >
        <div style={{ marginTop: '80px', margin: '40px' }}>
          <div className="accordion" id="accordionExample" style={{ padding: '40px' }}>
            <div className="accordion-item accordion-transition: .15s" style={{ marginBottom: '40px' }}>
              <div className="accordion-header mt-3 me-3 ms-3 mb-3" id="headingOne">
                <button
                  className="btn fs-2 fw-bold ms-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#1"
                  aria-expanded={currentStep === 1}
                  aria-controls="1"
                >
                  Which EveryShip warehouse are you shipping to?
                </button>
                <div id="1" className={`accordion-collapse collapse ${currentStep === 1 ? 'show' : ''}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  Step 1 of
                </div>
              </div>
              <div id="1" className={`accordion-collapse collapse ${currentStep === 1 ? 'show' : ''}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{ marginTop: '50px' }}>
                  <div className="form-control-lg" style={{ backgroundColor: "#E7E9EB", marginLeft: '54px' }}>
                    Head up!
                    Each receiving order costs $25 to securely unload and store your items in bar-coded locations. For receiving orders that take longer 2 hours, it will cost $35 per additional man-hour.
                    To learn more about Receiving Order cost, click here.
                  </div>
                  <div className="mt-3" style={{ marginLeft: '54px' }}>
                    <div className="mb-1">
                      <span className="fw-bold fs-5">Sending to</span>
                    </div>
                    <select className="form-select fs-5">
                      <option selected>Please select an option...</option>
                    </select>
                    <div className="mt-3" style={{ fontSize: '18px' }}>
                      <span><strong>Tip!</strong> Don't know where to send your inventory? Choose the warehouse closest to you or your customers.</span>
                    </div>
                  </div>
                </div>
                <div className="border">
                  <button
                    className="btn me-3 mt-3 mb-3 fs-5"
                    style={{ backgroundColor: "#2596be", color: "white", marginLeft: '70px' }}
                    onClick={handleSave}
                  >
                    Save & Continue
                  </button>
                  <button className="btn fs-5" style={{ color: '#2596be' }}>Cancel</button>
                </div>
              </div>
            </div>
            <div className="accordion-item" style={{ marginBottom: '40px' }}>
              <div className="accordion-header mt-3 me-3 ms-3 mb-3" id="headingTwo">
                <button
                  className="btn fs-2 fw-bold ms-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#2"
                  aria-expanded={currentStep === 2}
                  aria-controls="2"
                >
                  Search for item(s) you're sending to EveryShip
                </button>
                <div id="2" className={`accordion-collapse collapse ${currentStep === 2 ? 'show' : ''}`} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  Step 2 of
                </div>
              </div>
              <div id="2" className={`accordion-collapse collapse ${currentStep === 2 ? 'show' : ''}`} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{ marginTop: '50px'}}>
                  <div style={{ marginLeft: '54px', position: 'relative' }}>
                    <input
                      type="text"
                      className="form-control-lg w-100"
                      placeholder="Search by item name or EveryShipID"
                      aria-label="Search"
                      aria-describedby="basic-addon1"
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                    {searchResults.length > 0 && (
                      <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        backgroundColor: 'white',
                        border: '1px solid #ccc',
                        zIndex: 1000
                      }}>
                        {searchResults.map(item => (
                          <div key={item.id} className="form-check" style={{ padding: '10px', cursor: 'pointer' }} onClick={() => handleSelectItem(item)}>
                            {item.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {selectedItems.length > 0 && (
                    <div className="mt-3">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Inventory ID</th>
                            <th>Item Name</th>
                            <th>SKU</th>
                            <th>Platform</th>
                            <th>Quantity To Send</th>
                            <th>Lot</th>
                            <th>Expiration Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedItems.map(item => (
                            <tr key={item.id}>
                              <td>{item.id}</td>
                              <td>{item.name}</td>
                              <td>{item.sku}</td>
                              <td>{item.platform}</td>
                              <td>{item.quantity}</td>
                              <td>{item.lot}</td>
                              <td>{item.expiration}</td>
                              <td>
                                <button
                                  className="btn btn-danger"
                                  onClick={() =>
                                    setSelectedItems(selectedItems.filter(i => i.id !== item.id))
                                  }
                                >
                                  Remove
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  <div style={{ marginLeft: '54px' }}>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label">
                      I confirm that I have marked all applicable items as dangerous goods. Here's why it's important.
                    </label>
                  </div>
                </div>
                <div className="border">
                  <button
                    className="btn me-3 mt-3 mb-3 fs-5"
                    style={{ backgroundColor: "#2596be", color: "white", marginLeft: '70px' }}
                    onClick={handleSave}
                  >
                    Save & Continue
                  </button>
                  <button className="btn fs-5" style={{ color: '#2596be' }}>Cancel</button>
                </div>
              </div>
            </div>
            <div className="accordion-item" style={{ marginBottom: '40px' }} >
              <div className="accordion-header mt-3 me-3 ms-3 mb-3" id="headingThree">
                <button
                  className="btn fs-2 fw-bold ms-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#3"
                  aria-expanded={currentStep === 3}
                  aria-controls="3"
                >
                  How will your inventory arrive to EveryShip's fulfillment center?
                </button>
                <div id="3" className={`accordion-collapse collapse ${currentStep === 3 ? 'show' : ''}`} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  Step 3 of
                </div>
              </div>
              <div id="3" className={`accordion-collapse collapse ${currentStep === 3 ? 'show' : ''}`} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{ marginTop: '50px' }}>
                  <div>
                    <span style={{ marginLeft: '54px' }}>
                      Shipping Type:
                      <span data-tooltip-id="infoTooltip" style={{ cursor: 'pointer' }}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                      </span>
                      <Tooltip id="infoTooltip" place="right" content="This text explains the shipping type..." />
                    </span>
                    <div className="form-check " style={{ marginLeft: '54px' }}>
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="1" />
                      <label className="form-check-label">Parcel(standard shipping)</label>
                    </div>
                    <div className="form-check " style={{ marginLeft: '54px' }}>
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" />
                      <label className="form-check-label">Palletized container or LTL(less than-truckload)</label>
                    </div>
                    <div className="form-check" style={{ marginLeft: '54px' }}>
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" />
                      <label className="form-check-label">Floor loaded container</label>
                    </div>
                    <span style={{ color: '#adb5bd', marginLeft: '80px' }}>We require 1 WRO per container.</span>
                  </div>
                </div>
                <div className="border">
                  <button
                    className="btn me-3 mt-3 mb-3 fs-5"
                    style={{ backgroundColor: "#2596be", color: "white", marginLeft: '70px' }}
                    onClick={handleSave}
                  >
                    Save & Continue
                  </button>
                  <button className="btn fs-5" style={{ color: '#2596be' }}>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
