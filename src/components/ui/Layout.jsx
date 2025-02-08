import NavBar from "../NavBar/NavBar"
import { Outlet } from "react-router-dom"
import ScrollToTop from "../ScrollToTop"
import Footer from "../Footer"

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}
