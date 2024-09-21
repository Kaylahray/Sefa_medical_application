const PermissionCheckboxes = () => {
  return (
    <div className="mb-6 mt-6">
      <label className="block font-bold text-gray-700 mb-2">Permissions</label>
      <div className="flex justify-between text-xs ">
        {/* First Row - 5 Columns */}
        <div>
          <label className="inline-flex items-center text-sm">
            <input
              type="checkbox"
              className="form-checkbox h-3 w-3 text-indigo-600"
            />
            <span className="ml-2">Edit patient bio-data</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center text-sm">
            <input
              type="checkbox"
              className="form-checkbox h-3 w-3 text-indigo-600"
            />
            <span className="ml-2">Edit patients medical history</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center text-sm">
            <input
              type="checkbox"
              className="form-checkbox h-3 w-3 text-indigo-600"
            />
            <span className="ml-2">Edit patient hmo tier</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center text-sm">
            <input
              type="checkbox"
              className="form-checkbox h-3 w-3 text-indigo-600"
            />
            <span className="ml-2">Consultation</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center text-sm">
            <input
              type="checkbox"
              className="form-checkbox h-3 w-3 text-indigo-600"
            />
            <span className="ml-2">Generate receipt</span>
          </label>
        </div>
      </div>

      <div className="flex flex-wrap justify-between mt-4  mb-12 text-xs">
        {/* Second Row - 6 Columns */}
        <div>
          <label className="inline-flex items-center text-sm">
            <input
              type="checkbox"
              className="form-checkbox h-3 w-3 text-indigo-600"
            />
            <span className="ml-2">Edit staff details</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center text-sm">
            <input
              type="checkbox"
              className="form-checkbox h-3 w-3 text-indigo-600"
            />
            <span className="ml-2">Add staff</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center text-sm">
            <input
              type="checkbox"
              className="form-checkbox h-3 w-3 text-indigo-600"
            />
            <span className="ml-2">Access to finance</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center text-sm">
            <input
              type="checkbox"
              className="form-checkbox h-3 w-3 text-indigo-600"
            />
            <span className="ml-2">Add medication</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center text-sm">
            <input
              type="checkbox"
              className="form-checkbox h-3 w-3 text-indigo-600"
            />
            <span className="ml-2">Edit/manage medications</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center text-sm">
            <input
              type="checkbox"
              className="form-checkbox h-3 w-3 text-indigo-600"
            />
            <span className="ml-2">Access to analytics</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default PermissionCheckboxes;
