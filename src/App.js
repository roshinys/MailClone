import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import AlertNotification from "./UI/AlertNotification/AlertNotification";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/mail",
    element: <p>welcome to mail</p>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <AlertNotification />
    </>
  );
}

export default App;
