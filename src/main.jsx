import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Billing from "./Components/Billing/Billing.jsx";
import Inventory from "./Components/Inventory/Inventory.jsx";
import ItemRequest from "./Components/ItemRequest/ItemRequest.jsx";
import SalesReport from "./Components/SalesReport/SalesReport.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/billing",
    element: <Billing />,
  },
  {
    path: "/inventory",
    element: <Inventory />,
  },
  {
    path: "/itemRequest",
    element: <ItemRequest />,
  },
  {
    path: "/salesReport",
    element: <SalesReport />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
