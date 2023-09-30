import React from 'react'

const Login = () => {
    
    return (
        <div className='bg-success mt-4 w-50 m-auto rounded-4 bordered'>
            <form action="">
                <div className='d-flex justify-content-center align-items-center flex-column'>
                    <h1>Login Page</h1>
                    <input type="email" placeholder='enter email' name='email' className='w-50 mb-2 form-control' />
                    <input type="password" placeholder='enter password' name='password' className='w-50 mb-2 form-control' />
                    <button type='submit' className='btn btn-danger'> Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login