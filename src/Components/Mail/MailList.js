import React from "react";
import "./MailList.css";
import {
  Redo,
  MoreVert,
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  Settings,
  Inbox,
  People,
  LocalOffer,
} from "@mui/icons-material";
import { IconButton, Checkbox } from "@mui/material";
import MailSection from "../Layout/MailSection/MailSection";

function MailList(props) {
  return (
    <div className="mailList">
      <div className="mailList__settings">
        <div className="mailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="mailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="mailList__sections">
        <MailSection Icon={Inbox} title="Primary" selected />
        <MailSection Icon={People} title="Social" />
        <MailSection Icon={LocalOffer} title="Promotions" />
      </div>
      {props.children}
    </div>
  );
}

export default MailList;
