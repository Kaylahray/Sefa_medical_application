import React, { useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";
import TimelineContainer from "./TimelineContainer";

const MedicalAccordion = () => {
  const [timelineData, setTimelineData] = useState([
    {
      id: 1,
      title: "HIV Test on 25th July, 2022",
      result: "Negative"
    },
    {
      id: 2,
      title: "Malaria and Typhoid Test on 24th July, 2022",
      result: "Positive (Malaria+++) ",
      result2: "Positive (Typhoid)"
    },
    {
      id: 3,
      title: "General Test on 25th June, 2022",
      result: "Positive (Malaria++)"
    }
  ]);

  const [activeIndex, setActiveIndex] = useState(null);
  const [notifyCount, setNotifyCount] = useState(0); // Track the count of new items

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  


useEffect(()=>{
    toggleAccordion(activeIndex)
 },[timelineData])
  return (
    <div className="w-full max-w-7xl mx-auto mt-8 space-y-4">
      <AccordionItem
        title="Tests and Results"
        isActive={activeIndex === 0}
        onClick={() => {
          toggleAccordion(0);
          setNotifyCount(0);

        }}
        notifyCount={notifyCount}
      >
        <div className="bg-[#E4EAEA] border border-[#799794] p-4 rounded-lg mt-1">
          <div className="space-y-4">
            <TimelineContainer setNotifyCount={setNotifyCount} timelineData = {timelineData} setTimelineData= {setTimelineData} />
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
