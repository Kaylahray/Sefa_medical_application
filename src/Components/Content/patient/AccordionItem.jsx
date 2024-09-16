const AccordionItem = ({ title, isActive, onClick, children }) => (
  <div>
    <button
      onClick={onClick}
      className="w-full text-left p-4 bg-gray-50 border border-gray-200 rounded-lg flex justify-between items-center"
    >
      <span>{title}</span>
      <span>{isActive ? "-" : "+"}</span>
    </button>
    {isActive && <div>{children}</div>}
  </div>
);
export default AccordionItem;
