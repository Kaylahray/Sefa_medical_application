import up from "../../../assets/up.svg";
import down from "../../../assets/arrow_down.svg";

const AccordionItem = ({
  title,
  isActive,
  onClick,
  children,
  notify,
  date,
  time,
  setNotify,
}) => (
  <div>
    <div
      onClick={onClick}
      className={`w-full text-left p-4 bg-white border border-gray-200 rounded-lg flex ${
        date && time ? "flex-col items-start" : ""
      } justify-between `}
    >
      <div className="flex gap-2 items-center">
        <span>{title}</span>
        <img src={isActive ? up : down} alt="" />
      </div>
      {date && time && (
        <div className="text-sm text-gray-500 flex gap-2">
          <p>{date}</p>
          <p>{time}</p>
        </div>
      )}
      {notify && (
        <div
          onClick={() => setNotify(false)}
          className="bg-[#E4EAEA] font-normal text-md px-4 py-2 rounded-lg"
        >
          1 new
        </div>
      )}
    </div>
    {isActive && <div>{children}</div>}
  </div>
);
export default AccordionItem;
