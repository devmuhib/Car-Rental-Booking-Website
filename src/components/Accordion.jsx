import React from 'react';
import AccordionItem from './AccordionItem';

const accordion = [
  {
    id: 1,
    question: 'Justo est vero consetetur tempor?',
    answer:
      'Herauf vom wiederholt noch nicht busen. Glück wenn den an guten euch tönen. Und in mich busen schmerz schwankende ich. Herauf vom wiederholt noch nicht busen. Glück wenn den an guten euch tönen. Und in mich busen schmerz schwankende ich.',
  },

  {
    id: 2,
    question: 'Justo est vero consetetur tempor?',
    answer:
      'Herauf vom wiederholt noch nicht busen. Glück wenn den an guten euch tönen. Und in mich busen schmerz schwankende ich. Herauf vom wiederholt noch nicht busen. Glück wenn den an guten euch tönen. Und in mich busen schmerz schwankende ich.',
  },

  {
    id: 3,
    question: 'Justo est vero consetetur tempor?',
    answer:
      'Herauf vom wiederholt noch nicht busen. Glück wenn den an guten euch tönen. Und in mich busen schmerz schwankende ich. Herauf vom wiederholt noch nicht busen. Glück wenn den an guten euch tönen. Und in mich busen schmerz schwankende ich.',
  },
  {
    id: 4,
    question: 'Justo est vero consetetur tempor?',
    answer:
      'Herauf vom wiederholt noch nicht busen. Glück wenn den an guten euch tönen. Und in mich busen schmerz schwankende ich. Herauf vom wiederholt noch nicht busen. Glück wenn den an guten euch tönen. Und in mich busen schmerz schwankende ich.',
  },
];

const Accordion = () => {
  return (
    <div>
      {accordion.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Accordion;
