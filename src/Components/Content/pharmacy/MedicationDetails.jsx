import React from 'react';

const MedicationDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-10">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Paracetamol</h2>

        {/* Back Button */}
        <button className="text-gray-500 hover:text-gray-800 mb-6">
          <span className="inline-block mr-2">&larr;</span> Back
        </button>

        {/* Medication Information */}
        <div className="bg-gray-50 p-6 rounded-md shadow-inner">
          <div className="grid grid-cols-4 gap-4">
            {/* Price */}
            <div>
              <h4 className="text-gray-500 font-medium">Price</h4>
              <p className="text-lg font-semibold">₦4,000</p>
            </div>

            {/* Category */}
            <div>
              <h4 className="text-gray-500 font-medium">Category</h4>
              <p className="text-lg font-semibold">Analgesics and antipyretics</p>
            </div>

            {/* Quantity Available */}
            <div>
              <h4 className="text-gray-500 font-medium">Quantity Available</h4>
              <p className="text-lg font-semibold">150</p>
            </div>

            {/* Status */}
            <div className="flex items-center">
              <h4 className="text-gray-500 font-medium">Status</h4>
              <span className="ml-4 bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                Available
              </span>
            </div>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-6">
          <button className="text-green-600 hover:text-green-700 font-medium flex items-center">
            <span className="mr-2">✎</span> Edit Medication
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicationDetails;
