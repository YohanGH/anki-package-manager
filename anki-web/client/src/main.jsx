import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import components
import App from "./App";
import HomePage from "./pages/home_page/HomePage";
import DeckCreation from "./pages/deck_creation/DeckCreation";
import DeckManagement from "./pages/deck_management/DeckManagement";
import LoginPage from "./pages/login/LoginPage";
import NotFoundPage from "./pages/not_found_page/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "create-deck",
        element: <DeckCreation />,
      },
      {
        path: "manage-decks",
        element: <DeckManagement />
      },
      {
        path: "signIn",
        element: <LoginPage />
      },
      {
        path: "*",
        element: <NotFoundPage />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

