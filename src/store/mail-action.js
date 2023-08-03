import { alertActions } from "./alert-slice";
import { mailActions } from "./mail-slice.js";
import useHttp from "../hooks/use-http.js";

export const createMailAction = (mail) => {
  return async (dispatch) => {
    try {
      const sendRequest = useHttp({
        url: "http://localhost:8000/api/mail",
        body: mail,
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const response = await sendRequest();
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
      const sendRequest = useHttp({
        url: "http://localhost:8000/api/mail/inbox",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const response = await sendRequest();
      if (!response.data.success) {
        throw new Error(response?.data?.message);
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

export const getsentMailAction = () => {
  return async (dispatch) => {
    try {
      const sendRequest = useHttp({
        url: "http://localhost:8000/api/mail/sent",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const response = await sendRequest();
      if (!response.data.success) {
        throw new Error(response?.data?.message);
      } else {
        const sentMails = response?.data?.sentMails;
        if (!sentMails) {
          throw new Error("Something went wrong");
        }
        dispatch(mailActions.getSentMail({ sentMails }));
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
      const sendRequest = useHttp({
        url: `http://localhost:8000/api/mail/${id}`,
        method: "PUT",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const response = await sendRequest();
      if (!response.data.success) {
        throw new Error(response?.data?.message);
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

export const deleteMailByIdAction = (mailId, received) => {
  return async (dispatch) => {
    try {
      const sendRequest = useHttp({
        url: `http://localhost:8000/api/mail/${mailId}`,
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      const response = await sendRequest();
      if (!response.data.success) {
        throw new Error(response?.data?.message);
      }
      if (received) {
        dispatch(mailActions.delReceiverById({ id: mailId }));
        return;
      } else {
        dispatch(mailActions.delSenderById({ id: mailId }));
        return;
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
