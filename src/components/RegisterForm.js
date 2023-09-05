import React from 'react'
import './Registration.css'
import {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function RegisterForm() {
  const navigate = useNavigate();

  // reacthook form start here
  const {register,formState:{errors}, handleSubmit,} = useForm();
 //for seeing the data in the console bar
   const onSubmit = (data) => console.log(data);
   // reacthook form end here

// set up drop down contains levels

const options = [
  {label : "LEVEL 1 : BASIC", value: 1},
  {label : "LEVEL 2 : INTERMEDIATE", value: 2},
  {label : "LEVEL 3 : EXPERT", value: 3}
]
const [values, setValues] = useState({
  firstname: "",
  lastname: "",
  cellphone: "",
  password : ""
})


if(errors.name === "" && errors.pattern === "" && errors.password===""){
  axios.post("http://localhost:8081/",values)
  .then(res => {
    navigate('/');
  })
  .catch(err => console.log(err));
}


  return (
    <div>
      <div className='signup template d-flex  justify-content-center align-items-center vh-80 background: #ffffff;'>
        <div className='form_container p-5  bg-white rounded'>
        <form  onSubmit={handleSubmit(onSubmit)}>
          
            <h3 className='text-center mt-0 mb-4'>
              
              
              <b>Sign Up</b></h3>
            <div className='mb-3'>
                <label htmlFor='firstname'>firstname</label> <br/>
                <input type="text" placeholder='Enter your firstname' className='form-control' {...register("name",{required:true,pattern:/[A-Za-z]/})}/>
           <small>
           <error>
            {errors.name?.type === "required" && "name is required"}
            {errors.pattern?.type === "required" && "Enter the valid firstname"}
           </error>
           </small>
           
           
            </div>
            <div className='mb-3'>
                <label htmlFor='lastname'>lastname</label> <br/>
                <input type="text" placeholder='Enter your lastname' className='form-control' {...register("name",{required:true,pattern:/[A-Za-z]/})}/>
           <small>
           <error>
            {errors.name?.type === "required" && "lastname is required"}
            {errors.pattern?.type === "required" && "Enter the valid lastname"}
           </error>
           </small>
           
           
            </div>


            <div className='mb-3'>
                <label htmlFor='password'>Password</label> <br/>
                <input type="password" placeholder='Enter your password' className='form-control' {...register("password",{required:true,pattern:/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{5,8}$/})} />
           
                <small>
                <error>
               {errors.password?.type === "required" && "password is required"}
               

              </error>
                </small>
           
            </div>
            <div className='mb-4 '>
                <label htmlFor='dob'>Phone</label> <br/>
                <input type="text" placeholder='Enter your number' className='form-control'{...register("phone",{required: true,minLength:10,maxLength:12})} />
           <small>
                <error>

               {errors.phone?.type === "required" && "phoneNo is required"}
               {errors.phone?.type === "minLength" && "Entered number is less than 10 digits"}
               {errors.phone?.type === "maxLength" && "Entered number is more than 12 digits"}

              </error>
              </small>
           
           
            </div>
            <h4> SELECT YOUR LEVEL</h4>
                    <select className = "form-select">
                        {options.map(option =>(
                            <option value={option.value}>{option.label}</option>
                        ))}

                    </select>

            <div className='d-grid'>
              
              <button className='btn btn-dark'>Sign Up</button>

               </div>

               <small>
                Already have an account ? <Link to="/" className='ms-2'>Sign In</Link>
               </small>
        </form>
        </div>


      </div>
    </div>
  )
}

export default RegisterForm
