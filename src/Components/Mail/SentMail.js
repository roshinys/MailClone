import React from "react";
import MailRow from "./MailRow";
import "./MailList.css";
import { useSelector } from "react-redux";

function SentMail() {
  const sentMails = useSelector((state) => state.mail.sentMails);

  return (
    <div className="mailList__List">
      {sentMails.map((mail) => {
        return (
          <MailRow
            key={mail._id}
            id={mail._id}
            title={mail.subject}
            subject={mail.subject}
            description={mail.body}
            time={mail.createdAt}
            isRead={mail.isRead}
            isReceived={false}
          />
        );
      })}
    </div>
  );
}

export default SentMail;
