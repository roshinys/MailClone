import React from "react";
import MailRow from "./MailRow";
import "./MailList.css";
import { useSelector } from "react-redux";

function InboxMail() {
  const inboxMails = useSelector((state) => state.mail.inboxMails);

  return (
    <div className="mailList__List">
      {inboxMails.map((mail) => {
        return (
          <MailRow
            key={mail._id}
            id={mail._id}
            title={mail.subject}
            subject={mail.subject}
            description={mail.body}
            time={mail.createdAt}
            isRead={mail.isRead}
          />
        );
      })}
    </div>
  );
}

export default InboxMail;
