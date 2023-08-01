import React from "react";
import "./MailRow.css";
import { Checkbox, IconButton } from "@mui/material";
import {
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router";

function MailRow({ id, title, subject, description, time }) {
  const navigate = useNavigate();
  return (
    <div
      className="mailRow"
      onClick={() => {
        navigate("/mail");
      }}
    >
      <div className="mailRow_optionTitle">
        <div className="mailRow__options">
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
          {subject} -{" "}
          <span className="mailRow__description">{description}</span>
        </h4>
      </div>
      <p className="mailRow__time">{time}</p>
    </div>
  );
}

export default MailRow;
