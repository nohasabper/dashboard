
// import React, { useState ,useEffect } from 'react';
// import axios from 'axios';



// const Forms = () => {

  
//   const initialFormData = {
//     name: '',
//     nameEn: '',
//     address: '',
//     phone: '',
//     phone2: '',
//     whatsApp: '',
//     fax: '',
//     website: '',
//     youtube: '',
//     facebook: '',
//     commercialRegister: '',
//     taxCard: '',
//     tax: '',
//     logo: '',
//     softDelete: '',
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const [tableData, setTableData] = useState([]);
//   const [selectedRowIndex, setSelectedRowIndex] = useState(null);
//   const [isModalOpen, setModalOpen] = useState(false);

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [id]: value }));
//   };
// useEffect(() => {
//     // Fetch data when the component mounts
//     fetchData();
//   }, []); // Empty dependency array to run the effect only once on mount

//   const fetchData = async () => {
//     try {
//       // Your Laravel API endpoint for fetching data
//       const apiUrl = 'http://localhost/cms/api/show/companySitting';

//       // Send a GET request to the API
//       const response = await axios.get(apiUrl);

//       // Check if the request was successful
//       if (response.status === 200) {
//         // If successful, update your local state with the fetched data
//         const responseData = response.data;
//         setTableData(responseData);
//       } else {
//         // Handle other response statuses or errors
//         console.error('Error fetching data:', response);
//       }
//     } catch (error) {
//       // Handle any network or unexpected errors
//       console.error('Error:', error);
//     }
//   };
//   // const handleSave = () => {
//   //   if (selectedRowIndex !== null) {
//   //     setTableData((prevTableData) => {
//   //       const updatedData = [...prevTableData];
//   //       updatedData[selectedRowIndex] = formData;
//   //       return updatedData;
//   //     });
//   //     setSelectedRowIndex(null);
//   //   } else {
//   //     setTableData((prevTableData) => [...prevTableData, formData]);
//   //   }

//   //   setFormData(initialFormData);
//   //   setModalOpen(false);
//   // };

//   const handleReset = () => {
//     setFormData(initialFormData);
//     setModalOpen(false);
//   };

//   const handleUpdate = (index) => {
//     setFormData(tableData[index]);
//     setSelectedRowIndex(index);
//     setModalOpen(true);
//   };

//   const handleDelete = (index) => {
//     setTableData((prevTableData) => prevTableData.filter((_, i) => i !== index));
//   };
//   const handleSave = async () => {
//     try {
//       if (selectedRowIndex !== null) {
//         setTableData((prevTableData) => {
//           const updatedData = [...prevTableData];
//           updatedData[selectedRowIndex] = formData;
//           return updatedData;
//         });
//         setSelectedRowIndex(null);
//       } else {
//         setTableData((prevTableData) => [...prevTableData, formData]);
//       }
  
//       setFormData(initialFormData);
//       setModalOpen(false);
//       // Your Laravel API endpoint
//       const apiUrl = 'http://localhost/cms/api/store/companySitting';

//       // Send a POST request to the API with the form data
//       const response = await axios.post(apiUrl, formData);

//       // Check if the request was successful
//       if (response.status === 200) {
//         // If successful, update your local state or perform any other actions
//         const responseData = response.data;
//         console.log('Data saved successfully:', responseData);

//         // Reset the form and close the modal
//         setFormData(initialFormData);
//         setModalOpen(false);
//       } else {
//         // Handle other response statuses or errors
//         console.error('Error saving data:', response);
//       }
//     } catch (error) {
//       // Handle any network or unexpected errors
//       console.error('Error:', error);
//     }
//   };


//   return (
//     <div className="content-wrapper">
//       <section className="form pt-2">
//         <div className="container">
//           <form className="row g-3 needs-validation" noValidate>
//             {Object.entries(initialFormData).map(([field, value]) => (
//               <div className="col-md-4 col-lg-3" key={field}>
//                 <label htmlFor={field} className="form-label">
//                   {field.charAt(0).toUpperCase() + field.slice(1)}
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id={field}
//                   value={formData[field]}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//             ))}
//             <div className="col-12 mt-2">
//               <button className="btn btn-primary mx-2" type="button" onClick={handleSave}>
//                 <i className="fas fa-check"></i>
//               </button>
//               <button className="btn btn-success" type="button" onClick={handleReset}>
//                 <i className="fas fa-redo"></i>
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>

//       <section className="form_data">
//         <div className="container">
//           <table className="table caption-top table-responsive table-striped mt-4 table-bordered">
//             <caption className="bg-primary text-light fw-bold px-2 caption-top">CompanySitting</caption>
//             <thead>
//               <tr className="text-center">
//                 <th scope="col">#</th>
//                 {Object.keys(initialFormData).map((field) => (
//                   <th key={field} scope="col">
//                     {field}
//                   </th>
//                 ))}
//                 <th scope="col"></th>
//               </tr>
//             </thead>
//             <tbody>
//               {tableData.map((rowData, index) => (
//                 <tr key={index} className="text-center">
//                   <th scope="row">{index}</th>
//                   {Object.values(rowData).map((value, subIndex) => (
//                     <td key={subIndex}>{value}</td>
//                   ))}
//                   <td>
//                     <div className="d-flex gap-1">
//                       <button type="button" className="btn btn-danger mx-2" onClick={() => handleDelete(index)}>
//                         <i className="fas fa-trash-alt"></i>
//                       </button>
//                       <button className="btn btn-primary" type="button" onClick={() => handleUpdate(index)}>
//                         <i className="fas fa-edit"></i>
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* Bootstrap Modal */}
//       <div className={`modal fade ${isModalOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: isModalOpen ? 'block' : 'none' }}>
//         <div className="modal-dialog" role="document">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Update Row</h5>
//               <button type="button" className="btn-close" aria-label="Close" onClick={handleReset}></button>
//             </div>
//             <div className="modal-body">
//               <div className="row">
//                 {Object.entries(initialFormData).map(([field, value]) => (
//                   <div className="mb-3 col-4" key={field}>
//                     <label htmlFor={field} className="form-label">
//                       {field.charAt(0).toUpperCase() + field.slice(1)}
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id={field}
//                       value={formData[field]}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="modal-footer justify-content-center">
//               <button type="button" className="btn btn-secondary" onClick={handleReset}>
//                 Cancel
//               </button>
//               <button type="button" className="btn btn-primary" onClick={handleSave}>
//                 Save Update
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Forms;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Forms = () => {
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
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const apiUrl = 'http://localhost/cms/api/show/companySitting';
      const response = await axios.get(apiUrl);

      if (response.status === 200) {
        const responseData = response.data;
        setTableData(responseData);
      } else {
        console.error('Error fetching data:', response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setModalOpen(false);
  };

  const handleUpdate = (index) => {
    setFormData(tableData[index]);
    setSelectedRowIndex(index);
    setModalOpen(true);
  };

  const handleDelete = async (index) => {
    try {
      const apiUrl = `http://localhost/cms/api/delete/companySitting/${tableData[index].id}`;
      const response = await axios.delete(apiUrl);
  
      if (response.status === 200 && response.data && response.data.status === true) {
        setTableData((prevTableData) => prevTableData.filter((_, i) => i !== index));
        console.log('Data deleted successfully:', response);
  
        // Refresh data after deletion
        fetchData();
      } else {
        console.error('Error deleting data:', response);
      }
    } catch (error) {
      // Log the detailed error information
      console.error('Error deleting data:', error.response || error.message || error);
    }
  };
  
  

  const handleSave = async () => {
    try {
      const apiUrl = selectedRowIndex !== null
        ? `http://localhost/cms/api/update/companySitting/${formData.id}`
        : 'http://localhost/cms/api/store/companySitting';
  
      // Send a POST request to the API with the form data
      const response = await (selectedRowIndex !== null
        ? axios.put(apiUrl, formData)
        : axios.post(apiUrl, formData));
  
      // Check if the request was successful
      if (response.status === 200 && response.data && response.data.status === true) {
        // If successful, update your local state or perform any other actions
        const responseData = response.data;
        console.log('Data saved successfully:', responseData);
  
        // Reset the form and close the modal
        setFormData(initialFormData);
        setModalOpen(false);
  
        // Refresh data after saving
        fetchData();
      } else {
        // Handle other response statuses or errors
        console.error('Error saving data:', response.data);
      }
    } catch (error) {
      // Log the detailed error information
      console.error('Error saving data:', error.response || error.message || error);
    }
  };
  

  return (
    <div className="content-wrapper">
    <section className="form pt-2">
      <div className="container">
        <form className="row g-3 needs-validation" noValidate>
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

    <section className="form_data">
      <div className="container">
        <table className="table caption-top table-responsive table-striped mt-4 table-bordered">
          <caption className="bg-primary text-light fw-bold px-2 caption-top">CompanySitting</caption>
          <thead>
            <tr className="text-center">
              <th scope="col">#</th>               
               <th>id</th>

              {Object.keys(initialFormData).map((field) => (
                <th key={field} scope="col">
                  {field}
                </th>
              ))}
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData, index) => (
              <tr key={index} className="text-center">
                <th scope="row">{index}</th>
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
    <div className={`modal fade ${isModalOpen ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: isModalOpen ? 'block' : 'none' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Row</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={handleReset}></button>
          </div>
          <div className="modal-body">
            <div className="row">
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
              ))}
            </div>
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
};

export default Forms;
