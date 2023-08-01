import React, { useState } from "react";
import "./MailRow.css";
import { Checkbox, IconButton } from "@mui/material";
import {
  LabelImportantOutlined,
  StarBorderOutlined,
  FiberManualRecord,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { updateIsReadAction } from "../../store/mail-action";

function MailRow({ id, isRead, title, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mailClickHandler = () => {
    dispatch(updateIsReadAction(id, navigate));
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
          {" - "}
          <span className="mailRow__description">{description}</span>
        </h4>
      </div>
      <p className="mailRow__time">{time}</p>
    </div>
  );
}

export default MailRow;
