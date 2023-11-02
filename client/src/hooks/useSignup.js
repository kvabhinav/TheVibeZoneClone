import { useState } from 'react'
import useAuthContext from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState()
    const [isLoading, setLoading] = useState()

    const { dispatch } = useAuthContext()

    const signup = async (email, password, firstName, lastName) => {

        setError(false)
        setLoading(true)

        const response = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, firstName, lastName })
        })

        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setLoading(false)
        }

        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json))

            dispatch({ type: 'LOGIN', payload: json })

            setLoading(false)
        }
    }

    return { signup, error, isLoading }
}