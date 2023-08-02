import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DuoIcon from "@mui/icons-material/Duo";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import SideBarOption from "./SidebarOption";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { openSendMessage } from "../../../store/mail-slice";

function SideBar() {
  const [selected, setSelected] = useState({
    inbox: true,
    sent: false,
  });
  const dispatch = useDispatch();
  const inboxUnread = useSelector((state) => state.mail.unreadInboxMail);

  const selectChangeHandler = (value) => {
    if (value === "inbox") {
      setSelected({ inbox: true, sent: false });
    } else {
      setSelected({ inbox: false, sent: true });
    }
  };

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={() => {
          dispatch(openSendMessage());
        }}
      >
        Compose
      </Button>
      <SideBarOption
        Icon={InboxIcon}
        title="Inbox"
        number={inboxUnread}
        selected={selected.inbox}
        redirectTo="/mail"
        onSelectChange={selectChangeHandler}
      />
      <SideBarOption Icon={StarIcon} title="Starred" number={inboxUnread} />
      <SideBarOption
        Icon={AccessTimeIcon}
        title="Snoozed"
        number={inboxUnread}
      />
      <SideBarOption
        Icon={LabelImportantIcon}
        title="Important"
        number={inboxUnread}
      />
      <SideBarOption
        Icon={NearMeIcon}
        title="Sent"
        number={inboxUnread}
        selected={selected.sent}
        onSelectChange={selectChangeHandler}
        redirectTo="/mail/sent"
      />
      <SideBarOption
        Icon={NoteIcon}
        title="Drafts"
        number={inboxUnread}
        onSelectChange={() => {}}
      />
      <SideBarOption Icon={ExpandMoreIcon} title="More" number={inboxUnread} />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
