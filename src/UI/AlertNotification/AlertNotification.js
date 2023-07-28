import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { alertActions } from "../../store/alert-slice";

function AlertNofication() {
  const dispatch = useDispatch();
  const { showAlertMessage, alertMessageContent } = useSelector(
    (state) => state.alert
  );

  const closeAlertHandler = () => {
    dispatch(alertActions.closeAlert());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={showAlertMessage}
      onClose={closeAlertHandler}
      autoHideDuration={6000}
    >
      <Alert severity="info">{alertMessageContent}</Alert>
    </Snackbar>
  );
}

export default AlertNofication;
