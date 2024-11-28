// import { useApiCall } from './hooks/useApicall';
// import Loading from './components/Loading/Loading';
// import Table from './components/Table/Table';
// import './App.css';

// function App() {
//   const url="https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json";
//   const {data,isLoading,error}=useApiCall(url);


// if(error){
//   return  <div>Something Went Wrong</div>

// }
//   return (
//     <div className="App">
//      {
//       isLoading?
//       <Loading/>:
//       <Table data={data}/>
//      }
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import "./App.css"; // Add custom styles here

// // Sample data
// const projects = [
//   { percentageFunded: 186, amountPledged: 15283 },
//   { percentageFunded: 120, amountPledged: 10456 },
//   { percentageFunded: 95, amountPledged: 8500 },
//   { percentageFunded: 76, amountPledged: 6100 },
//   { percentageFunded: 45, amountPledged: 3000 },
//   { percentageFunded: 200, amountPledged: 18000 },
//   { percentageFunded: 150, amountPledged: 12000 },
//   { percentageFunded: 65, amountPledged: 5000 },
//   { percentageFunded: 80, amountPledged: 7000 },
//   { percentageFunded: 50, amountPledged: 4000 },
// ];

// const App = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const recordsPerPage = 5;

//   // Calculate pagination details
//   const totalRecords = projects.length;
//   const totalPages = Math.ceil(totalRecords / recordsPerPage);
//   const startIndex = (currentPage - 1) * recordsPerPage;
//   const currentRecords = projects.slice(startIndex, startIndex + recordsPerPage);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="container">
//       <h1>Project Details</h1>
//       <table className="styled-table">
//         <thead>
//           <tr>
//             <th>S.No.</th>
//             <th>Percentage Funded</th>
//             <th>Amount Pledged</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentRecords.map((project, index) => (
//             <tr key={index}>
//               <td>{startIndex + index + 1}</td>
//               <td>{project.percentageFunded}%</td>
//               <td>${project.amountPledged.toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//           <button
//             key={page}
//             onClick={() => handlePageChange(page)}
//             className={currentPage === page ? "active" : ""}
//           >
//             {page}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
