import React, { useRef, useState } from "react";
import "./SendMail.css";
import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../../store/mail-slice";
import JoditEditor from "jodit-react";
import { alertActions } from "../../store/alert-slice";

function SendMail() {
  const editor = useRef(null);
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleToChange = (e) => {
    setTo(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!to.includes("@")) {
      dispatch(alertActions.setAlert({ content: "To must include @" }));
    } else if (subject.length === 0) {
      dispatch(alertActions.setAlert({ content: "Subject Cannot be empty" }));
    } else {
      //   dispatch message to backend
    }
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          className="sendMail__close"
          onClick={() => {
            dispatch(closeSendMessage());
          }}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          name="to"
          type="text"
          placeholder="To"
          value={to}
          onChange={handleToChange}
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={handleSubjectChange}
        />
        <JoditEditor
          className="sendMail__editor"
          ref={editor}
          value={message}
          tabIndex={1}
          onBlur={(newContent) => setMessage(newContent)}
          onChange={(newContent) => {}}
        />
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
