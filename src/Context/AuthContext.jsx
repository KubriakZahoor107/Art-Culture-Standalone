import { createContext, useContext, useEffect, useState } from 'react'
import { debug, error } from '../utils/logger'
import API from '../utils/api'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		// On component mount, check if the user is already logged in
		const fetchUser = async () => {
			const token = localStorage.getItem('token')
			if (token) {
				try {
					const response = await API.get('/auth/me', {
						headers: {
							Authorization: `Bearer ${token}`,
						},
					})
					debug('User data fetched:', response.data.user)
					setUser(response.data.user)
					setIsLoggedIn(true)
				} catch (error) {
					error('Failed to fetch user', error)
					localStorage.removeItem('token')
					setUser(null)
					setIsLoggedIn(false)
				}
			}
			setLoading(false)
		}
		fetchUser()
	}, [])

	const login = (userData, token) => {
		setUser(userData)
		setIsLoggedIn(true)
		localStorage.setItem('token', token)
		debug('User logged in:', userData)
	}

	const logout = () => {
		setUser(null)
		setIsLoggedIn(false)
		localStorage.removeItem('token')
	}
	
		const updateUser = userData => {
		setUser(userData)
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				login,
				updateUser,
				logout,
				isLoggedIn,
			}}
		>
			{!loading && children}
		</AuthContext.Provider>
	)
}
