import { useState } from "react"
import { useSignup } from "../hooks/useSignup"
import { useNavigate } from "react-router-dom"

export default function Register() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signup, isLoading, error } = useSignup()
    const navigate = useNavigate()

    const submitHandle = async (e) => {
        e.preventDefault()
        localStorage.removeItem('user')

        await signup(email, password, firstName, lastName)

        if(localStorage.getItem('user')!==null){
            navigate('/')
        }
    }

    return (
        <div className="w-full h-[450px] mt-40 ">
            <form onSubmit={submitHandle}>
                <div className="max-w-lg mx-auto flex flex-col justify-center items-center px-[31px]">
                    <h1 className="text-[40px] font-semibold my-4">Create account</h1>
                    {error&&<div className="error-box">
                        <h5 className="error">{error}</h5>
                        </div>}
                    <input type="text" className="login-input" name="firstName" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" className="login-input" name="LastName" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <input type="text" className="login-input" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" className="login-input" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="black-button" onClick={submitHandle} disabled={isLoading}>Create</button>
                </div>
            </form>
        </div>
    )
}