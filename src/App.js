import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Shared/Layout";
import Dashboard from "./Components/Dashboard";
import Product from "./Components/Product";
import "./App.css";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "customers",
        element: <Product />,
      },
      {
        path: "icomes",
        element: <Product />,
      },
      {
        path: "promotion",
        element: <Product />,
      },
      {
        path: "helps",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
