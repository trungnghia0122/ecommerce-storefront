import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import Homepage from "./pages/Homepage.jsx"
import About from "./pages/About.jsx"
import Cart from "./pages/Cart.jsx"
import Authenticate from "./pages/Authenticate.jsx"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/ui/Layout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/authenticate",
        element: <Authenticate />,
      },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
