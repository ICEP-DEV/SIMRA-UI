import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
//import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
//import GoogleLogin from 'react-google-login';
import { useState } from 'react';
//const client_id = "642282152016-vhutl900u76f6b22ifgigurkj359qtr3.apps.googleusercontent.com";

function Login() {
    let navigate = useNavigate();
    const [values, setValues] = useState({
        mobileNo: "",
        password: ""
    });

    const handleChangeUpdate = e => {
        const { name, value } = e.target;
        setValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    //  react hook form start here 

    //const { register, formState: { errors }, handleSubmit, } = useForm();
    //for seeing the data in the console bar
    const onSubmit = (data) => console.log(data);

    // set up login button using gmail account
    const onSuccess = async() => {
        if (values.mobileNo == "" && values.password == "") {
            console.log("All field should be filled")
            return;
        }
        if (values.mobileNo == "") {
            console.log("Enter username")
            return;
        }
        if (values.password == "") {
            console.log("Enter password")
            return;
        }

        const loginData =  await axios.post('http://localhost:3005/api/login',values)
        console.log(loginData.data)
        if(loginData.data.success == true){
            console.log(loginData.data.message);
            navigate('/Home')
        }
        else{
            console.log(loginData.data.message);
        }

        try {

        }
        catch (ex) {

        }



        

    }
    const onFailure = (res) => {
        console.log("LOGIN FAILED! res", res);

    }


    return (
        <div >
            <div className='login template d-flex  justify-content-center align-items-center vh-100 background: #ffffff;'>
                <div className='form_container p-5 bg-white  rounded'>
                    <h3 className='text-center mb-5'><b>SIMRA</b></h3>
                    <h3 className='text-center mb-5'><b>Login here</b></h3>
                    <div className='mb-4'>
                        <label htmlFor='username' className='lables'>Username</label> <br />
                        <input type="text" onChange={handleChangeUpdate} name='mobileNo' value={setValues.mobileNo} placeholder='Enter Username' className='form-control' />
                        
                    </div>

                    <div className='mb-5'>
                        <label htmlFor='password'>Password</label> <br />
                        <input type="password" onChange={handleChangeUpdate} name='password' value={setValues.password} placeholder='Enter Password' className='form-control' />
                        <div>
                        </div>
                    </div>


                    <div className='d-grid'>

                        <button className='btn btn-dark' onClick={onSuccess}>Sign In</button>

                    </div>


                    <small>
                        Don't have an account ? <Link to="/signup" className='ms-2'>Sign Up</Link>
                    </small>
                </div>


            </div>
        </div>
    )
}

export default Login