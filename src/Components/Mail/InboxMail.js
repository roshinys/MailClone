import React, { useEffect } from "react";
import MailRow from "./MailRow";
import "./MailList.css";
import { useDispatch, useSelector } from "react-redux";
import { getInboxMailAction } from "../../store/mail-action";

function InboxMail() {
  const dispatch = useDispatch();
  const inboxMails = useSelector((state) => state.mail.inboxMails);
  useEffect(() => {
    dispatch(getInboxMailAction());
  }, [dispatch]);

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
