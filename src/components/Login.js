import React from 'react'
import { useForm } from "react-hook-form";

import './Login.css'
import { Link } from 'react-router-dom';

//import GoogleLogin from 'react-google-login';
import { useState } from 'react';
//const client_id = "642282152016-vhutl900u76f6b22ifgigurkj359qtr3.apps.googleusercontent.com";

function Login() {
    const [values, setValues] = useState({
        username: "",
        password: ""
    });

    //  react hook form start here 

    const { register, formState: { errors }, handleSubmit, } = useForm();
    //for seeing the data in the console bar
    const onSubmit = (data) => console.log(data);

    // set up login button using gmail account
    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user", res.profileObj);

    }
    const onFailure = (res) => {
        console.log("LOGIN FAILED! res", res);

    }



    return (
        <div >
            <div className='login template d-flex  justify-content-center align-items-center vh-100 background: #ffffff;'>
                <div className='form_container p-5 bg-white  rounded'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className='text-center mb-5'><b>SIMRA</b></h3>
                        <h3 className='text-center mb-5'><b>Login here</b></h3>
                        <div className='mb-4'>
                            <label htmlFor='username' className='lables'>Username</label> <br />
                            <input type="username" placeholder='Enter Username' className='form-control' {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />
                            <small>
                                <error>
                                    {errors.email?.type === "required" && "Username  is required"}


                                </error>
                            </small>
                        </div>

                        <div className='mb-5'>
                            <label htmlFor='password'>Password</label> <br />
                            <input type="password" placeholder='Enter Password' className='form-control' {...register("password", { required: true, pattern: /^[a-zA-Z0-9!@#\$%\^\&*_=+-]{5,8}$/ })} />

                            <small>
                                <error>
                                    {errors.password?.type === "required" && "password is required"}
                                    {errors.password?.type === "pattern" && "Enter password 1 lowercase,1 Uppercase,Number,Sysmbol"}

                                </error>
                            </small>

                            <div>




                            </div>



                        </div>


                        <div className='d-grid'>

                            <button className='btn btn-dark'>Sign In</button>

                        </div>


                        <small>
                            Don't have an account ? <Link to="/signup" className='ms-2'>Sign Up</Link>
                        </small>
                    </form>
                </div>


            </div>
        </div>
    )
}

export default Login



