import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"
import { useNavigate } from "react-router"

export default function Profile() {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!currentUser) {
      navigate("/")
    }
  }, [currentUser, navigate])

  return (
    <>
      <div style={{ height: "100vh" }}>
        <div
          style={{
            paddingTop: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <h1>welcome, {currentUser?.email}.</h1>
          <button
            onClick={logout}
            style={{ padding: "10px 20px", cursor: "pointer" }}
          >
            LOGOUT
          </button>
        </div>
      </div>
    </>
  )
}
