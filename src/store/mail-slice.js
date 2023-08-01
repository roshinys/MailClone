import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
    inboxMails: [],
    sentMails: [],
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
    },
  },
});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export const mailActions = mailSlice.actions;

export default mailSlice;
