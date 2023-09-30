import React, { useRef, useState } from 'react'
import Login from './Login'

const Registration = () => {
    let [login, setLogin] = useState(false)
    let username = useRef()
    let email = useRef()
    let password = useRef()
    let phone = useRef()

    let handleSubmit = (e) => {
        localStorage.setItem("Name", (username.current.value))
        localStorage.setItem("Email", (email.current.value))
        localStorage.setItem("Pawword", (password.current.value))
        localStorage.setItem("Email", (phone.current.value))
        alert("Registered successfully")
        setLogin(!login);
        e.preventDefault()
    }
    return (

        <>
            {login ? <Login /> :

                <div className='bg-secondary mt-4 w-75 m-auto rounded-4 bordered'>
                    <form action="" onSubmit={handleSubmit} className='p-4'>
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                            <h1>Register</h1>
                            <input ref={username} type="text" placeholder='ENter the name' name='username' className='form-control mb-2 w-75' />

                            <input ref={email} type="Email" placeholder='Enter the email' name='email' className='form-control mb-2 w-75' />
                            <input ref={password} type="password" placeholder='Enter the password' name='password' className='form-control mb-2 w-75' />
                            <input ref={phone} type="text" placeholder='Enter the ph' name='phone' className='form-control mb-2 w-75' />
                            <button className='btn btn-danger' type='submit'>Register</button>
                        </div>
                    </form>
                </div>}

        </>

    )
}

export default Registration