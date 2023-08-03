import { useEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import AlertNotification from "./UI/AlertNotification/AlertNotification";
import RootLayout from "./RootLayout";
import Mail from "./Components/Mail/Mail";
import MailList from "./Components/Mail/MailList";
import SendMail from "./Components/Mail/SendMail";
import InboxMail from "./Components/Mail/InboxMail";
import { useDispatch, useSelector } from "react-redux";
import { getInboxMailAction, getsentMailAction } from "./store/mail-action";
import SentMail from "./Components/Mail/SentMail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth redirectTo="/login">
        <RootLayout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/mail",
        element: (
          <MailList>
            <InboxMail />
          </MailList>
        ),
      },
      {
        path: "/mail/sent",
        element: (
          <MailList>
            <SentMail />
          </MailList>
        ),
      },
      {
        path: "/mail/:mailId",
        element: <Mail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  // Add this in your component file
  require("react-dom");
  window.React2 = require("react");
  console.log(window.React1 === window.React2);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (token) {
        dispatch(getInboxMailAction());
        dispatch(getsentMailAction());
      }
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch, token]);

  const sendMessageIsOpen = useSelector(
    (state) => state.mail.sendMessageIsOpen
  );
  return (
    <>
      <RouterProvider router={router} />
      {token && sendMessageIsOpen && <SendMail />}
      <AlertNotification />
    </>
  );
}

function RequireAuth(props) {
  const token = useSelector((state) => state.auth.token);
  return token ? <>{props.children}</> : <Navigate to={props.redirectTo} />;
}

export default App;
