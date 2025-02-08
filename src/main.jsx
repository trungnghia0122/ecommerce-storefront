import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Homepage from "./pages/Homepage.jsx"
import About from "./pages/About.jsx"
import Cart from "./pages/Cart.jsx"
import Authenticate from "./pages/Authenticate/Authenticate.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/ui/Layout"
import { AuthProvider } from "./context/AuthContext.jsx"
import Profile from "./pages/Profile.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "authenticate",
        element: <Authenticate />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
