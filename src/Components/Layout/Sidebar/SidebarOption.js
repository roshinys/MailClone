import React from "react";
import "./SidebarOption.css";
import { useNavigate } from "react-router-dom";

function SidebarOption({
  Icon,
  title,
  number,
  selected,
  redirectTo,
  onSelectChange,
}) {
  const navigate = useNavigate();
  const clickHandler = () => {
    onSelectChange(title.toLowerCase());
    navigate(redirectTo);
  };
  return (
    <div
      className={`sidebarOption ${selected && `sidebarOption--active`}`}
      onClick={clickHandler}
    >
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
