import { useState } from "react"

export default function Register() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="w-full h-fit mt-40 ">
            <div className="max-w-lg mx-auto flex flex-col justify-center items-center px-[31px]">
                <h1 className="text-[40px] font-semibold my-4">Create account</h1>
                <input type="text" className="login-input" name="firstName" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" className="login-input" name="LastName" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <input type="text" className="login-input" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" className="login-input" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="black-button">Create</button>
            </div>
        </div>
    )
}