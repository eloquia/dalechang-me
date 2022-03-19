import React from 'react';

export interface SectionProps {
  children: React.ReactNode[];
}

const Section = (props: SectionProps) => {
  return (
    <>
      {props.children.map(child => {
        return <div className="section-part">
          {child}
        </div>
      })}
    </>
  )
};

export default Section;