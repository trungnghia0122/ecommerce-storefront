import ReactDOM from "react-dom"
import { useState, useEffect } from "react"
import styles from "./SearchBar.module.less" // Import LESS styles

export default function SearchBar({ onClose }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    return () => setIsVisible(false)
  }, [])

  return ReactDOM.createPortal(
    <div
      className={`${styles["search-overlay"]} ${
        isVisible ? styles["fade-in"] : styles["fade-out"]
      }`}
    >
      <div className={styles["search-container"]}>
        <input
          type='text'
          placeholder='Search our store'
          className={styles["search-input"]}
        />
        <button onClick={onClose} className={styles["close-button"]}>
          X
        </button>
      </div>
    </div>,
    document.getElementById("search-overlay")
  )
}
