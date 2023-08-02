import React from "react";
import "./MailRow.css";
import { Checkbox, IconButton } from "@mui/material";
import {
  LabelImportantOutlined,
  StarBorderOutlined,
  FiberManualRecord,
  Delete,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import HTMLReactParser from "html-react-parser";
import { useDispatch } from "react-redux";
import { deleteMailByIdAction } from "../../store/mail-action";

function MailRow({ id, isRead, title, description, time, isReceived }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const mailClickHandler = () => {
    navigate(`/mail/${id}?inbox=${isReceived}`);
  };

  const delClickHandler = () => {
    dispatch(deleteMailByIdAction(id, isReceived));
  };

  return (
    <div className="mailRow">
      <div className="mailRow_optionTitle">
        <div className="mailRow__options">
          {isReceived && !isRead && (
            <FiberManualRecord className="mailRow__readProperty" />
          )}
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
      <div className="mailRow__message" onClick={mailClickHandler}>
        <h4>
          <span className="mailRow__description">
            {description && HTMLReactParser(description.slice(0, 10) + "...")}
          </span>
        </h4>
      </div>
      <p className="mailRow__time">
        {time}
        <IconButton onClick={delClickHandler}>
          <Delete />
        </IconButton>
      </p>
    </div>
  );
}

export default MailRow;
