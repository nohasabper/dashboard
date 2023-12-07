

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
export default function Forms() {
  const initialFormData = {
    name: '',
    nameEn: '',
    address: '',
    phone: '',
    phone2: '',
    whatsApp: '',
    fax: '',
    website: '',
    youtube: '',
    facebook: '',
    commercialRegister: '',
    taxCard: '',
    tax: '',
    logo: '',
    softDelete: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [tableData, setTableData] = useState([]);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSave = () => {
    if (selectedRowIndex !== null) {
      setTableData((prevTableData) => {
        const updatedData = [...prevTableData];
        updatedData[selectedRowIndex] = formData;
        return updatedData;
      });
      setSelectedRowIndex(null);
    } else {
      setTableData((prevTableData) => [...prevTableData, formData]);
    }

    setFormData(initialFormData);
    closeModal();
  };

  const handleReset = () => {
    setFormData(initialFormData);
    closeModal();
  };

  const handleUpdate = (index) => {
    setFormData(tableData[index]);
    setSelectedRowIndex(index);
    openModal();
  };

  const handleDelete = (index) => {
    setTableData((prevTableData) => prevTableData.filter((_, i) => i !== index));
  };

  const openModal = () => {
    const modal = document.getElementById('updateModal');
    modal.classList.add('show');
    modal.style.display = 'block';
  };

  const closeModal = () => {
    const modal = document.getElementById('updateModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
  };

  return (
    <div class="content-wrapper">
      <section className='form pt-2'>
        <div className="container ">
          <form className="row g-3 needs-validation" noValidate>
            {/* ... Your form inputs ... */}
            {Object.entries(initialFormData).map(([field, value]) => (
              <div className="col-md-4 col-lg-3" key={field}>
                <label htmlFor={field} className="form-label">
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  required
                />
              </div>
            ))}
            <div className="col-12 mt-2">
              <button className="btn btn-primary mx-2" type="button" onClick={handleSave}>
                      <i className="fas fa-check"></i>

              </button>
              <button className="btn btn-success" type="button" onClick={handleReset}>
                 <i className="fas fa-redo"></i>

              </button>
            </div>
          </form>
        </div>
      </section>

      <section className='form_data'>
        <div className='container'>
          <table className="table caption-top table-responsive table-striped mt-4 table-bordered">
            <caption className='bg-primary  text-light fw-bold px-2 caption-top' >CompanySitting</caption>
            <thead> 
              <tr className="text-center">
                <th scope="col">#</th>

                <th scope="col">name</th>
                <th scope="col">nameEn</th>
                <th scope="col">addresss</th>

                <th scope="col">phone</th>
                <th scope="col">phone2</th>
                <th scope="col">whatsApp</th>
                <th scope="col">fax</th>
                <th scope="col">website</th>
                <th scope="col">youtube</th>
                <th scope="col">facebook</th>
                <th scope="col">commercialRegister</th>
                <th scope="col">taxCard</th>
                <th scope="col">tax</th>
                <th scope="col">logo</th>
                <th scope="col">softDelete</th>
                <th scope="col"></th>
              </tr>
            </thead>
            {/* ... Your table header ... */}
            <tbody>
              {tableData.map((rowData, index) => (
                <tr key={index} className='text-center'>
                  <th scope="row">{index} </th>

                  {Object.values(rowData).map((value, subIndex) => (
                    <td key={subIndex}>{value}</td>
                  ))}
                  <td>
                    <div className="d-flex gap-1">
                      <button type="button" className="btn btn-danger mx-2" onClick={() => handleDelete(index)}>
                                    <i className="fas fa-trash-alt"></i>

                      </button>
                      <button className="btn btn-primary" type="button" onClick={() => handleUpdate(index)}>
                                           <i className="fas fa-edit"></i> 

                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bootstrap Modal */}
      <div className="modal fade" id="updateModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update Row
              </h5>
              {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button> */}
            </div>
            <div className="modal-body">
              {/* ... Your form inputs in the modal ... */}
              <div className='row'>
              {Object.entries(initialFormData).map(([field, value]) => (
                <div className="mb-3 col-4" key={field}>
                  <label htmlFor={field} className="form-label">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              ))}</div>
            </div>
            <div className="modal-footer justify-content-center">
              <button type="button" className="btn btn-secondary" onClick={handleReset}>
                Cancel
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSave}>
                Save Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
