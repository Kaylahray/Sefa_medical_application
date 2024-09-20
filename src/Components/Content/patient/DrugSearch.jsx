import React, { useState } from "react";
import SearchTwo from "../../shared/SearchTwo";

// Dummy drug data
const drugsList = [
  { name: "Paracetamol", dose: "", qty: "", time: "", duration: "" },
  { name: "Coartem 80-480", dose: "", qty: "", time: "", duration: "" },
];

const DrugSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the drugs list based on the search query
  const filteredDrugs = drugsList.filter(
    (drug) =>
      drug.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Search component */}
      <SearchTwo
        placeholder="Search for drugs"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Drug List Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse mt-1">
          <thead>
            <tr className="text-left text-gray-600 uppercase text-sm leading-normal">
              <th className="py-1 px-3">Name</th>
              <th className="py-1 px-3">Dose</th>
              <th className="py-1 px-3">QTY</th>
              <th className="py-1 px-3">Time</th>
              <th className="py-1 px-3">Duration</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {filteredDrugs.length > 0 ? (
              filteredDrugs.map((drug, index) => (
                <tr key={index} className="text-left">
                  <td className="py-1 px-3">{drug.name}</td>
                  <td className="py-1 px-3">{drug.dose}</td>
                  <td className="py-1 px-3">{drug.qty}</td>
                  <td className="py-1 px-3">{drug.time}</td>
                  <td className="py-1 px-3">{drug.duration}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-3 px-6 text-center text-gray-500">
                  No drugs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DrugSearch;
