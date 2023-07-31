import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import AlertNotification from "./UI/AlertNotification/AlertNotification";
import RootLayout from "./RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/mail",
        element: <p>mail</p>,
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
  return (
    <>
      <RouterProvider router={router} />
      <AlertNotification />
    </>
  );
}

export default App;
