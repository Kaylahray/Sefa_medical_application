import React from 'react';
import Button from '../../shared/Button';
import SymptomsSearch from './SymptomSearch';
import DrugSearch from './DrugSearch';
const EndConsultation = ({ handleSwitchPage }) => {
  return (
    <div className="flex flex-col">
      <header className="flex justify-end items-center p-4">
        <Button 
          onClick={handleSwitchPage} >
          End Consultation
        </Button>
      </header>
      <main className="flex-grow p-6 grid grid-cols-1 gap-6">
        <div>
        <h2>Observations</h2>
       <SymptomsSearch/>
        </div>
       
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Doctor's Comment</label>
            <textarea 
              className="mt-1 p-2 border border-gray-300 rounded w-full h-40 min-h-[270px]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Drug Prescription</label>
         <DrugSearch/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EndConsultation;
