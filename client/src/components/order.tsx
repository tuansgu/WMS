import React, { useState } from 'react';

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

  return (
    <>
      <div style={{ backgroundColor: '#E7E9EB' }}>
        <div style={{ marginTop: '80px', margin: '40px' }}>
          <div className="accordion" id="accordionExample" style={{ padding: '40px' }}>
            <div className="accordion-item" style={{ marginBottom: '40px' }}>
              <div className="accordion-header mt-3 me-3 ms-3 mb-3" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <button className="btn fs-2 fw-bold ms-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Which EveryShip warehouse are you shipping to?
                </button>
                <div id="collapseOne" className="accordion-collapse collapse show" style={{ marginLeft: '70px' }} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  Step 1 of
                </div>
              </div>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
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
                  <button className="btn me-3 mt-3 mb-3 fs-5" style={{ backgroundColor: "#2596be", color: "white", marginLeft: '70px' }}>Save & Continue</button>
                  <button className="btn fs-5" style={{ color: '#2596be' }}>Cancel</button>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-header mt-3 me-3 ms-3 mb-3" id="headingTwo" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <button className="btn fs-2 fw-bold ms-5" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                  Search for item(s) you're sending to EveryShip
                </button>
                <div id="collapseTwo" className="accordion-collapse collapse show" style={{ marginLeft: '70px' }} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  Step 2 of
                </div>
              </div>
              <div id="collapseTwo" className="accordion-collapse collapse show mt-3" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={{ marginTop: '50px' }}>
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
                  <button className="btn me-3 mt-3 mb-3 fs-5" style={{ backgroundColor: "#2596be", color: "white", marginLeft: '70px' }}>Save & Continue</button>
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
