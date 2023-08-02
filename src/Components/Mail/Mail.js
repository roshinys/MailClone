import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error,
  ExitToApp,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import "./Mail.css";
import { useDispatch, useSelector } from "react-redux";
import { updateIsReadAction } from "../../store/mail-action";
import HTMLReactParser from "html-react-parser";

function Mail() {
  const navigate = useNavigate();
  const [mail, setMail] = useState({});
  const { mailId } = useParams();
  const dispatch = useDispatch();
  const inboxMails = useSelector((state) => state.mail.inboxMails);

  useEffect(() => {
    const result = inboxMails.filter((mail) => {
      return mail._id === mailId;
    });
    if (result.length !== 0) {
      setMail(result[0]);
    }
  }, [mailId, inboxMails, dispatch]);

  useEffect(() => {
    if (mail && !mail.isRead) {
      dispatch(updateIsReadAction(mailId));
    }
  }, [mail, mailId, dispatch]);

  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => navigate("/mail")}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>{mail.subject}</h2>
          <LabelImportant className="mail__important" />
          <p className="mail__time">{mail.createdAt}</p>
        </div>
        {mail.body && (
          <div className="mail__message">{HTMLReactParser(mail.body)}</div>
        )}
      </div>
    </div>
  );
}

export default Mail;
