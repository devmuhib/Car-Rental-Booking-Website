import React, { useState } from 'react';

const AccordionItem = ({ question, answer }) => {
  const [showAccordion, setShowAccordion] = useState(false);
  return (
    <>
      <div
        className=" d-flex align-items-center gap-3 py-2 px-2 "
        style={{ background: '#000d6b' }}
      >
        <p
          onClick={() => setShowAccordion(!showAccordion)}
          className="mb-0 fs-5"
          style={{ color: '#f9a826' }}
        >
          {showAccordion ? (
            <i class="ri-indeterminate-circle-line"></i>
          ) : (
            <i class="ri-add-circle-line"></i>
          )}
        </p>
        <h6 className="fs-6 text-light fw-normal">{question}</h6>
      </div>
      <p className="section__description mt-3 mb-3">
        {showAccordion && answer}
      </p>
    </>
  );
};

export default AccordionItem;
