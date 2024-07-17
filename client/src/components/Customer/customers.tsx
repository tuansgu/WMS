import React from 'react'

const customers = () => {
  return (
    <>
      <div className="container" style={{marginTop: '60px'}}>
        <div className='d-flex justify-content-center'>
          <button className="btn btn-primary mb-3 me-3">Add New Customer</button>
          <input type="text" className=" mb-3 form-control w-50" placeholder="Search customers..." />
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
            <tr>
              <td className='text-center'>Nguyen Tuan</td>
              <td className='text-center'>nguyentuan01082003t@gmail.com</td>
              <td className='text-center'>0328357808</td>
              <td className='text-center'>Ho Chi Minh City, VietNam</td>
              <td>
                <div className='text-center'>
                  <button className='me-3 btn btn-primary'>Details</button>
                  <button className='btn btn-primary'>Edit</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default customers