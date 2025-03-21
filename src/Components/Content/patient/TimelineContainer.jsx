import React, { useState } from 'react';
import TimelineItem from './Timeline';
import Button from '../../shared/Button';
const TimelineContainer = ({ setNotifyCount , timelineData, isModalOpen, closeModal, setTimelineData}) => {
 
  const [newItem, setNewItem] = useState({ title: '', result: '', result2: '' });

 
  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newTimelineItem = {
      id: Date.now(),
      ...newItem
    };

    setTimelineData([newTimelineItem, ...timelineData]);  // Add new item to timeline
    setNotifyCount((prevCount) => prevCount + 1);  // Increment notification count
    closeModal();  // Close modal
    // setNewItem({ title: '', result: '', result2: '' });   Reset form fields
  };

  return (
    <div>
      {/* <button
        onClick={openModal}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Update Timeline
      </button> */}

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-20 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="mb-4 text-lg font-semibold">Add New Timeline Entry</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  value={newItem.title}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Result</label>
                <input
                  type="text"
                  name="result"
                  value={newItem.result}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Result 2 (optional)</label>
                <input
                  type="text"
                  name="result2"
                  value={newItem.result2}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="flex justify-end items-center mx-auto gap-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className=" px-4 py-1 text-gray-700 cursor-pointer bg-gray-200 rounded hover:bg-gray-300"
                >
                  Cancel
                </button>
               <Button type='submit'>
                Add to timeline
               </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <nav aria-label="Progress">
        <ol className="overflow-hidden">
          {timelineData.map((item, index) => (
            <li key={item.id} className={`pb-8 relative ${index === timelineData.length - 1 ? 'pb-0' : ''}`}>
              <TimelineItem
                number={timelineData.length - index}
                title={item.title}
                result={item.result}
                result2={item.result2}
              />
              {index !== timelineData.length - 1 && (
                <div aria-hidden="true" className="absolute z-2 left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" />
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default TimelineContainer;
