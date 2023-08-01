import React from "react";
import "./MailSection.css";

function Section({ Icon, title, selected }) {
  return (
    <div
      className={`section ${selected && `section--selected`}`}
      style={{
        borderBottom: `3px solid`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}

export default Section;
