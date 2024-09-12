
import React, { useState } from 'react';

const medicationData = [
  { name: 'Paracetamol', classification: 'Analgesics and antipyretics', quantity: '1,000', price: '₦4,000', status: 'Available' },
  { name: 'Paracetamol', classification: 'Analgesics and antipyretics', quantity: '1,000', price: '₦4,000', status: 'Unavailable' },
  // Add more data rows as needed
];

const MedicationTable = () => {
  const [medications, setMedications] = useState(medicationData);

  const handleSort = (column) => {}
    // Logic for sorting columns can be added here
  

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Medications</h2>

      <table className="min-w-full text-left table-auto border-collapse">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="px-4 py-2">
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleSort('medication')}>
                <span>Medication</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleSort('classification')}>
                <span>Classification</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleSort('quantity')}>
                <span>Quantity Available</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleSort('price')}>
                <span>Price</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </th>
            <th className="px-4 py-2">
              <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleSort('status')}>
                <span>Status</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {medications.map((med, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{med.name}</td>
              <td className="px-4 py-2">{med.classification}</td>
              <td className="px-4 py-2">{med.quantity}</td>
              <td className="px-4 py-2">{med.price}</td>
              <td className={`px-4 py-2 font-semibold ${med.status === 'Available' ? 'text-green-500' : 'text-red-500'}`}>
                {med.status}
              </td>
              <td className="px-4 py-2">
                <button className="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h12" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-sm text-gray-500">
        <p>10 of 10,000</p>
      </div>
    </div>
  );
}


export default MedicationTable;

