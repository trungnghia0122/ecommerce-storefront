import { useState } from "react"
import styles from "./Authenticate.module.less"
import Spinner from "../../components/ui/Spinner/Spinner"
import { useAuth } from "../../context/AuthContext"
import { useNavigate } from "react-router"

export default function Authenticate() {
  const { login, signup } = useAuth()
  const navigate = useNavigate()

  const [isRegister, setIsRegister] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function handleAuthentication(event) {
    event.preventDefault()
    if (
      !email ||
      !password ||
      !email.includes("@") ||
      password.length < 6 ||
      isAuthenticating
    ) {
      setError("Invalid username or password.")
      return
    }

    setIsAuthenticating(true)
    setError(null)
    try {
      if (isRegister) {
        await signup(firstName, lastName, email, password)
      } else {
        await login(email, password)
      }
      navigate("/")
    } catch (e) {
      const errorCode = e.code
      let errorMessage = "Something went wrong. Please try again."

      if (errorCode === "auth/user-not-found") {
        errorMessage = "User not found. Please check your email."
      } else if (errorCode === "auth/wrong-password") {
        errorMessage = "Incorrect password. Try again."
      } else if (errorCode === "auth/invalid-credential") {
        errorMessage = "User not found or incorrect password."
      } else if (errorCode === "auth/too-many-requests") {
        errorMessage = "Too many failed attempts. Please wait and try again."
      }

      setError(errorMessage)
      setEmail("")
      setPassword("")
    } finally {
      setIsAuthenticating(false)
    }
  }

  return (
    <div
      className={styles.container}
      style={{
        paddingTop: isRegister ? "25px" : "0",
        paddingBottom: isRegister ? "25px" : "0",
      }}
    >
      <h1 className={styles.heading}>
        {isRegister ? "CREATE ACCOUNT" : "LOGIN"}
      </h1>

      <form onSubmit={handleAuthentication}>
        {error && (
          <p
            style={{
              color: "red",
              backgroundColor: "#f8d7da",
              border: "0.5px solid red",
              padding: "8px",
              fontSize: "12px",
              marginBottom: "5px",
            }}
          >
            <span style={{ marginRight: "5px" }}>•</span>
            {error}
          </p>
        )}
        {isRegister && (
          <>
            <div className={styles.inputContainer}>
              <h6>FIRST NAME</h6>
              <input
                type='text'
                placeholder='tony'
                className={styles.input}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className={styles.inputContainer}>
              <h6>LAST NAME</h6>
              <input
                type='text'
                placeholder='tran'
                className={styles.input}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </>
        )}

        <div className={styles.inputContainer}>
          <h6>EMAIL</h6>
          <input
            type='email'
            placeholder='tony@gmail.com'
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className={styles.inputContainer}>
          <h6>PASSWORD</h6>
          <input
            type='password'
            placeholder='*******'
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          disabled={
            isAuthenticating ||
            (isRegister
              ? !email || !password || !firstName || !lastName
              : !email || !password)
          }
          className={styles.submitButton}
        >
          {isAuthenticating ? <Spinner /> : isRegister ? "CREATE" : "SIGN IN"}
        </button>

        <button
          disabled={isAuthenticating}
          onClick={(e) => {
            e.preventDefault()
            setIsRegister(!isRegister)
            setError("")
            setEmail("")
            setPassword("")
            setFirstName("")
            setLastName("")
          }}
          className={styles.toggleButton}
        >
          {isRegister ? "Have an account?" : "Create account"}
        </button>
      </form>
    </div>
  )
}
