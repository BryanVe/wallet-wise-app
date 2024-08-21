import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./routes/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
