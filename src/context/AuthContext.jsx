import { createContext, useContext, useState, useEffect } from "react"
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"
import { auth } from "../../firebase"
import { doc, setDoc, getDoc } from "react"

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [currentData, setCurrentData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
      }
      setIsLoading(false)
    })
    return unsubscribe
  }, [])

  async function fetchUserData(uid) {}

  function login(email, password) {
    console.log(email + " " + password)
    return signInWithEmailAndPassword(auth, email, password)
  }

  function signup(firstName, lastName, email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ currentUser, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
