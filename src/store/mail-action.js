import * as api from "../api.js";
import { alertActions } from "./alert-slice";
import { mailActions } from "./mail-slice.js";

export const createMailAction = (mail) => {
  return async (dispatch) => {
    try {
      const response = await api.createMail(mail);
      if (response.error) {
        throw new Error(response?.exception?.response?.data?.message);
      } else {
        const responseMail = response?.data?.mail;
        if (!responseMail) {
          throw new Error("Something went wrong");
        }
        dispatch(
          mailActions.addMail({
            mail: responseMail,
          })
        );
        dispatch(mailActions.closeSendMessage());
      }
    } catch (err) {
      dispatch(
        alertActions.setAlert({
          content: err && err.message ? err.message : "Something went wrong",
        })
      );
    }
  };
};

export const getInboxMailAction = () => {
  return async (dispatch) => {
    try {
      const response = await api.getInboxMail();
      if (response.error) {
        throw new Error(response?.exception?.response?.data?.message);
      } else {
        const inboxMails = response?.data?.inboxMails;
        if (!inboxMails) {
          throw new Error("Something went wrong");
        }
        dispatch(mailActions.getInboxMail({ inboxMails }));
      }
    } catch (err) {
      dispatch(
        alertActions.setAlert({
          content: err && err.message ? err.message : "Something went wrong",
        })
      );
    }
  };
};

export const updateIsReadAction = (id) => {
  return async (dispatch) => {
    try {
      const response = await api.updateIsRead(id);
      if (response.error) {
        throw new Error(response?.exception?.response?.data?.message);
      } else {
        dispatch(mailActions.updateIsRead({ id }));
      }
    } catch (err) {
      dispatch(
        alertActions.setAlert({
          content: err && err.message ? err.message : "Something went wrong",
        })
      );
    }
  };
};

export const getMailByIdAction = (mailId) => {
  return async (dispatch) => {
    try {
      const response = await api.getMailById(mailId);
      if (response.error) {
        throw new Error(response?.exception?.response?.data?.message);
      }
      const mail = response?.data?.mail;
      if (!mail) {
        throw new Error();
      }
      return mail;
    } catch (err) {
      dispatch(
        alertActions.setAlert({
          content: err && err.message ? err.message : "Something went wrong",
        })
      );
    }
  };
};

export const deleteMailByIdAction = (mailId, received) => {
  return async (dispatch) => {
    try {
      const response = await api.deleteMailById(mailId);
      if (response.error) {
        throw new Error(response?.exception?.response?.data?.message);
      }
      if (received) {
        dispatch(mailActions.delReceiverById({ id: mailId }));
        return;
      }
      //dispatch sender end action
      return;
    } catch (err) {
      dispatch(
        alertActions.setAlert({
          content: err && err.message ? err.message : "Something went wrong",
        })
      );
    }
  };
};
