import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import TimelineItem from "./Timeline";

const MedicalAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [notify, setNotify] = useState(true);
  // const toggleNotify = (index)=>{

  // }

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-8 space-y-4">
      {/* Accordion Items */}
      <AccordionItem
        title="Tests and Results"
        isActive={activeIndex === 0}
        onClick={() => toggleAccordion(0)}
        notify={notify}
        setNotify={setNotify}
      >
        <div className="bg-white p-4 rounded-lg">
          <div className="space-y-4">
            <TimelineItem
              number="3"
              title="HIV Test on 25th July, 2022"
              result="Negative"
            />
            <TimelineItem
              number="2"
              title="Malaria and Typhoid Test on 24th July, 2022"
              result="Positive (Malaria+++), Positive (Typhoid)"
            />
            <TimelineItem
              number="1"
              title="General Test on 25th June, 2022"
              result="Positive (Malaria++)"
            />
          </div>
        </div>
      </AccordionItem>
      <AccordionItem
        title="Medications"
        isActive={activeIndex === 1}
        onClick={() => toggleAccordion(1)}
      >
        <p className="p-4">No Medications Available.</p>
      </AccordionItem>
      <AccordionItem
        title="Illness Record"
        isActive={activeIndex === 2}
        onClick={() => toggleAccordion(2)}
      >
        <p className="p-4">No Illness Records Available.</p>
      </AccordionItem>
      <AccordionItem
        title="Scans"
        isActive={activeIndex === 3}
        onClick={() => toggleAccordion(3)}
        notify={notify}
        setNotify={setNotify}
      >
        <p className="p-4">No Scans Available.</p>
      </AccordionItem>
      <AccordionItem
        title="Admissions"
        isActive={activeIndex === 4}
        onClick={() => toggleAccordion(4)}
      >
        <p className="p-4">No Admissions Available.</p>
      </AccordionItem>
    </div>
  );
};
export default MedicalAccordion;
