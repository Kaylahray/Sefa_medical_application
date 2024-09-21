import React, { useState } from 'react';
import NewConsultation from './ConsultationAccordion';
import EndConsultation from './EndConsultation';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './css/transition.css'; // Import your custom CSS for transitions

const ConsultationPage = () => {
  const [isNewConsultation, setIsNewConsultation] = useState(true);

  const handleSwitchPage = () => {
    setIsNewConsultation(!isNewConsultation);
  };

  return (
    <div className="relative">
      <TransitionGroup component={null}>
        {isNewConsultation ? (
          <CSSTransition
            key="new-consultation"
            timeout={200}
            classNames="swipe-right"
          >
            <NewConsultation handleSwitchPage={handleSwitchPage} />
          </CSSTransition>
        ) : (
          <CSSTransition
            key="end-consultation"
            timeout={200}
            classNames="swipe-left"
          >
            <EndConsultation handleSwitchPage={handleSwitchPage} />
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default ConsultationPage;
