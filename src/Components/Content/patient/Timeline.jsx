const TimelineItem = ({ number, title, result }) => (
  <div className="bg-gray-200 p-4 rounded-lg">
    <div className="flex items-center space-x-2">
      <div className="w-6 h-6 bg-green-600 text-white flex justify-center items-center rounded-full">
        {number}
      </div>
      <div className="flex-grow">
        <h4 className="font-bold">{title}</h4>
        <p>{`Result: ${result}`}</p>
      </div>
    </div>
  </div>
);

export default TimelineItem;
