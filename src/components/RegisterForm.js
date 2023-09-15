import React from 'react'
import './Registration.css'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function RegisterForm() {
  const navigate = useNavigate();

  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };


  // reacthook form start here
  const { register, formState: { errors }, handleSubmit, } = useForm();
  //for seeing the data in the console bar
  const onSubmit = (data) => console.log(data);
  // reacthook form end here

  // set up drop down contains levels
  const [values, setValues] = useState({
    mobileNo: "",
    password: "",
    firstname: "",
    lastname: "",
    selectedValue: ""
  })

  const handleChangeUpdate = e => {
    const { name, value } = e.target;
    setValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const onSuccess = async () => {
    if (values.mobileNo == "" && values.password == ""
      && values.firstname == "" && values.lastname == "" && values.selectedValue == "") {
      console.log("All field should be filled")
      return;
    }
    if (values.firstname == "") {
      console.log("Enter firstname")
      return;
    }
    if (values.lastname == "") {
      console.log("Enter lastname")
      return;
    }
    if (values.mobileNo == "") {
      console.log("Enter mobile Number")
      return;
    }
    if (values.password == "") {
      console.log("Enter password")
      return;
    }
    if (values.selectedValue == "") {
      console.log("Enter level")
      return;
    }
    const registerData = await axios.get('http://localhost:3000/api/register', values)
    console.log(registerData.data)
    if (registerData.data.success == true) {
      console.log(registerData.data.message);
      navigate('/Login')
    }
    else {
      console.log(registerData.data.message);
    }

    try {

    }
    catch (ex) {

    }

  }




  return (
    <div>
      <div className='signup template d-flex  justify-content-center align-items-center vh-80 background: #ffffff; mt-5'>
        <div className='form_container p-5  bg-white rounded'>
          <form  >

            <div className='text-center mt-0 mb-4'>

              <h3>SIMRA</h3>
              <b>SIGN UP here</b>
            </div>
            <div className='mb-3'>
              <label htmlFor='firstname'>firstname</label> <br />
              <input type="text" onChange={handleChangeUpdate} name='firstname' value={setValues.firstname} placeholder='Enter your firstname' className='form-control' />

            </div>
            <div className='mb-3'>
              <label htmlFor='lastname'>lastname</label> <br />
              <input type="text" onChange={handleChangeUpdate} name='lastname' value={setValues.lastname} placeholder='Enter your lastname' className='form-control' />
              <small>

              </small>


            </div>


            <div className='mb-3'>
              <label htmlFor='password'>Password</label> <br />
              <input type="password" onChange={handleChangeUpdate} name='password' value={setValues.password} placeholder='Enter your password' className='form-control' />


            </div>
            <div className='mb-4 '>
              <label htmlFor='dob'>Phone</label> <br />
              <input type="text" onChange={handleChangeUpdate} name='mobileNo' value={setValues.mobileNo} placeholder='Enter your number' className='form-control'{...register("phone", { required: true, minLength: 10, maxLength: 12 })} />



            </div>
            
            <div className="container mt-5">
              <div className="form-group">
                <label htmlFor="exampleDropdown">Select your level:</label>
                <select
                  className="form-control"
                  id="exampleDropdown"
                  onChange={handleSelectChange}
                  value={selectedValue} name='level'
                >
                  <option value="">Level</option>
                  <option value="option1">BASIC</option>
                  <option value="option2">INTERMEDIATE</option>
                  <option value="option3">EXPERT</option>
                </select>
              </div>
            </div>

            <div className='d-grid'>

              <button className='btn btn-dark' onClick={onSuccess}>Sign Up</button>

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