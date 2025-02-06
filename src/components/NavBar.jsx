import "./NavBar.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const leftLinks = [
  { name: "SHOP", path: "/shop" },
  {
    name: "WHO WE ARE",
    path: "/about",
  },
]
const rightLinks = [
  { name: "Profile", path: "/authenticate" },
  {
    name: "Search",
    path: "/search",
  },
  {
    name: "Cart",
    path: "/cart",
  },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className='container'>
      <div className={`nav-container ${scrolled ? "scrolled" : ""}`}>
        <ul>
          {leftLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <h1>
          <Link to='/'>
            <h6>vintage club</h6>
          </Link>
        </h1>
        <ul>
          {rightLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
