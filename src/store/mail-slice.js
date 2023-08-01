import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
    inboxMails: [],
    sentMails: [],
    unreadInboxMail: 0,
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
    updateIsRead: (state, action) => {
      const mailId = action.payload.id;
      state.inboxMails = state.inboxMails.map((mail) => {
        if (mail._id === mailId) {
          return { ...mail, isRead: true };
        } else {
          return mail;
        }
      });
    },
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export const mailActions = mailSlice.actions;

export default mailSlice;
