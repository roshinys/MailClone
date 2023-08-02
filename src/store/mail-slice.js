import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
    inboxMails: [],
    sentMails: [],
    unreadInboxMail: 0,
    countSentMail: 0,
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    addMail: (state, action) => {
      state.sentMails.push(action.payload.mail);
    },
    getInboxMail: (state, action) => {
      state.inboxMails = action.payload.inboxMails;
      state.unreadInboxMail = action.payload.inboxMails.reduce(
        (count, mail) => {
          return count + (mail.isRead === false ? 1 : 0);
        },
        0
      );
    },
    getSentMail: (state, action) => {
      state.sentMails = action.payload.sentMails;
      state.countSentMail = state.sentMails.length;
    },
    updateIsRead: (state, action) => {
      const mailId = action.payload.id;
      state.inboxMails = state.inboxMails.map((mail) => {
        if (mail._id === mailId) {
          state.unreadInboxMail -= 1;
          return { ...mail, isRead: true };
        } else {
          return mail;
        }
      });
    },
    delReceiverById: (state, action) => {
      const mailId = action.payload.id;
      state.inboxMails = state.inboxMails.filter((mail) => {
        return mailId !== mail._id;
      });
    },
    delSenderById: (state, action) => {
      const mailId = action.payload.id;
      state.sentMails = state.sentMails.filter((mail) => {
        return mailId !== mail._id;
      });
      state.countSentMail = state.sentMails.length;
    },
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export const mailActions = mailSlice.actions;

export default mailSlice;
