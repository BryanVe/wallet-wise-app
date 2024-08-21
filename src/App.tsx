import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./routes/SignIn";
import { InternalLayout } from "./layouts";
import { Categories, Home } from "./routes/Internal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    element: <InternalLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
