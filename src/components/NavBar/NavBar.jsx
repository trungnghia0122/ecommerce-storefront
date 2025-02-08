import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import styles from "./NavBar.module.less"
import { useAuth } from "../../context/AuthContext"
import SearchBar from "../SearchBar/SearchBar"

export default function NavBar() {
  const location = useLocation()
  const isHomePage = location.pathname === "/"
  const { currentUser } = useAuth()
  const [scrolled, setScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const leftLinks = [
    { name: "SHOP", path: "/shop" },
    { name: "WHO WE ARE", path: "/about" },
  ]

  const openSearch = () => {
    setIsSearchOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeSearch = () => {
    setIsSearchOpen(false)
    document.body.style.overflow = "auto"
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <div className={isHomePage ? styles.navHomepage : styles.container}>
        <div
          className={`${styles.navContainer} ${
            scrolled && isHomePage ? styles.scrolled : ""
          }`}
        >
          <ul>
            {leftLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>

          <Link to='/'>
            <h4>vintage club</h4>
          </Link>

          <ul>
            <li style={{ cursor: "pointer" }}>
              <Link to={`${currentUser ? "/profile" : "/authenticate"}`}>
                Profile
              </Link>
            </li>

            <li>
              <button
                onClick={openSearch}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "inherit",
                  color: "inherit",
                }}
              >
                Search
              </button>
            </li>

            <li style={{ cursor: "pointer" }}>
              <Link to='/cart'>Cart</Link>
            </li>
          </ul>
        </div>
      </div>
      {isSearchOpen && <SearchBar onClose={closeSearch} />}
    </>
  )
}
