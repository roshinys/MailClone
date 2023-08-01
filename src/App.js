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
import { useSelector } from "react-redux";

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
        element: <MailList />,
      },
      {
        path: "/mail/id",
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
  const sendMessageIsOpen = useSelector(
    (state) => state.mail.sendMessageIsOpen
  );
  const token = useSelector((state) => state.auth.token);
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
