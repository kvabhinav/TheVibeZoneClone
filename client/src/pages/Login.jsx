import { useState } from "react"
import { Link } from "react-router-dom"

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="w-full h-96 mt-40 mb-4 ">
            <div className="max-w-lg mx-auto flex flex-col justify-center items-center px-[31px]">
                <h1 className="text-[44px] font-semibold my-6">Login</h1>
                <input type="text" className="login-input" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className="login-input" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.password)} />
                <h6 className="text-xs font-semibold text-gray-500 underline underline-offset-[3px] self-start">Forgot your password?</h6>
                <div>
                    <button className="black-button">Signin</button>
                </div>
                <Link to='/account/register'><h6 className="text-sm font-semibold text-gray-500 underline underline-offset-2">Create an account</h6></Link>
                
            </div>

        </div>
    )
}