import React, { useState } from "react";
import SearchTwo from "../../shared/SearchTwo";
const symptomsList = ["Head-aches", "High Temperature", "Flu", "Cough", "Fatigue", "Body Pain"];

const SymptomsSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState(['Head-aches', "High Temperature", 'Flu']);

  // Filter the symptoms list based on the search query
  const filteredSymptoms = symptomsList.filter(
    (symptom) =>
      symptom.toLowerCase().includes(searchQuery.toLowerCase()) && !selectedSymptoms.includes(symptom)
  );

  // Handle adding a symptom
  const handleAddSymptom = (symptom) => {
    setSelectedSymptoms([...selectedSymptoms, symptom]);
    setSearchQuery(""); // Clear the search input after adding
  };

  // Handle removing a symptom
  const handleRemoveSymptom = (symptom) => {
    setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
  };

  return (
    <div className="w-full relative">
      {/* Search component */}
      <SearchTwo
        placeholder="Search for symptoms"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Show the selected symptoms */}
      <div className="border border-gray-200 rounded-md p-4 h-40 bg-white">
        {selectedSymptoms.map((symptom, index) => (
          <div
            key={index}
            className="inline-block bg-[#E4EAEA] text-gray-700 rounded-full px-4 py-2 m-2"
          >
            {symptom}
            <button
              onClick={() => handleRemoveSymptom(symptom)}
              className="ml-2 text-[#3D4C4A]"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      {/* Show filtered symptoms based on search query */}
      {searchQuery && filteredSymptoms.length > 0 && (
        <div className="border border-gray-300 rounded-md p-8 mt-4 bg-white absolute top-[-60%] left-40 max-h-28 overflow-y-scroll ">
          <p className="text-gray-500">Click to add:</p>
          {filteredSymptoms.map((symptom, index) => (
            <button
              key={index}
              onClick={() => handleAddSymptom(symptom)}
              className="block text-left w-full bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md mt-2"
            >
              {symptom}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SymptomsSearch;
