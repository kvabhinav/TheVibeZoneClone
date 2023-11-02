import { useState } from 'react'
import useAuthContext from './useAuthContext'

export const useLogin = () => {
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState()

    const { dispatch } = useAuthContext()

    const login = async (email, password) => {

        setError(null)
        setIsLoading(true)

        const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            //set the user in local storage
            localStorage.setItem('user', JSON.stringify(json))

            //call the authContext function
            dispatch({ type: 'LOGIN', payload: json })

            //set isLoading to false
            setIsLoading(false)
        }
    }

    return { login, isLoading, error }
}