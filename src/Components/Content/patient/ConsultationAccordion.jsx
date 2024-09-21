import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import Button from "../../shared/Button";
// Reusable AccordionItem component

const ConsultationAccordion = ({ handleSwitchPage }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-4">
      <div className="w-full flex item-center justify-end p-3">
        <Button  onClick={handleSwitchPage}>New Consultation</Button>
      </div>
      {/* First Accordion Item */}
      <AccordionItem
        title="Dr Abdulahhi Abubakar"
        date="25th July, 2022"
        time="11:59am"
        notify={false} // No notification for this one
        isActive={activeIndex === 0}
        onClick={() => toggleAccordion(0)}
      >
        <div className="grid grid-cols-3 gap-4 p-4 min-h-[310px] rounded-lg mt-2 bg-[#E4EAEA] border-[1px] border-[#799794]">
          <div className="p-4 rounded-lg">
            <p className="font-semibold text-[#283231] text-lg">
              Observations
            </p>
            <ul className="text-md text-[#3D4C4A] font-normal flex flex-col mt-4 gap-4">
              <li>• High temperature</li>
              <li>• Flu</li>
              <li>• Headaches</li>
            </ul>
          </div>
          <div className=" border-l-[0.5px] border-[#D2DCDB] p-4 ">
            <p className="font-semibold text-[#283231] text-lg">
              Doctors Comment
            </p>
            <p className="text-md text-[#3D4C4A] font-normal mt-4 gap-4 xl:text-nowrap">
              Patient has to be tested at the lab and should be <br />
              admitted for observation immediately.
            </p>
          </div>
          <div className="p-4 border-l-[0.5px] border-[#D2DCDB]">
            <p className="font-semibold text-[#283231] text-lg">
              Drug Prescription
            </p>
            <ul className="text-md text-[#3D4C4A] font-normal flex flex-col mt-4 gap-4">
              <li>• Paracetamol</li>
              <li>• Coartem 80-480</li>
            </ul>
          </div>
        </div>
      </AccordionItem>
      {/* Second Accordion Item with notification */}
      <AccordionItem
        title="Dr Abdulahhi Abubakar"
        date="25th July, 2022"
        time="11:59am"
        notifyText="1 new"
        isActive={activeIndex === 1}
        onClick={() => toggleAccordion(1)}
      >
        <p className="p-4">No additional information.</p>
      </AccordionItem>
      <AccordionItem
        title="Dr Abdulahhi Abubakar"
        date="25th July, 2022"
        time="11:59am"
        notifyText="1 new"
        isActive={activeIndex === 2}
        onClick={() => toggleAccordion(2)}
      >
        <p className="p-4">No additional information.</p>
      </AccordionItem>{" "}
      <AccordionItem
        title="Dr Abdulahhi Abubakar"
        date="25th July, 2022"
        time="11:59am"
        notifyText="1 new"
        isActive={activeIndex === 3}
        onClick={() => toggleAccordion(3)}
      >
        <p className="p-4">No additional information.</p>
      </AccordionItem>{" "}
      <AccordionItem
        title="Dr Abdulahhi Abubakar"
        date="25th July, 2022"
        time="11:59am"
        notifyText="1 new"
        isActive={activeIndex === 4}
        onClick={() => toggleAccordion(4)}
      >
        <p className="p-4">No additional information.</p>
      </AccordionItem>
    </div>
  );
};

export default ConsultationAccordion;
