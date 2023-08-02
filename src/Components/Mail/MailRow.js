import React from "react";
import "./MailRow.css";
import { Checkbox, IconButton } from "@mui/material";
import {
  LabelImportantOutlined,
  StarBorderOutlined,
  FiberManualRecord,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import HTMLReactParser from "html-react-parser";

function MailRow({ id, isRead, title, description, time }) {
  const navigate = useNavigate();
  const mailClickHandler = () => {
    navigate(`/mail/${id}`);
  };
  return (
    <div className="mailRow" onClick={mailClickHandler}>
      <div className="mailRow_optionTitle">
        <div className="mailRow__options">
          {!isRead && <FiberManualRecord className="mailRow__readProperty" />}
          <Checkbox />
          <IconButton>
            <StarBorderOutlined />
          </IconButton>
          <IconButton>
            <LabelImportantOutlined />
          </IconButton>
        </div>
        <h3 className="mailRow__title">{title}</h3>
      </div>
      <div className="mailRow__message">
        <h4>
          <span className="mailRow__description">
            {description && HTMLReactParser(description.slice(0, 10) + "...")}
          </span>
        </h4>
      </div>
      <p className="mailRow__time">{time}</p>
    </div>
  );
}

export default MailRow;
