/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import axios from "axios";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CONFIG from "../global/config";

function RegisterInput() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    Swal.fire({
      title: `Are you sure to register ${username}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sure!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire(
          `Welcome ${username}!`,
          "Please login to use app.",
          "success"
        );
      }
    });
    setError(false);
    try {
      const res = await axios.post(
        `${CONFIG.BASE_URL}/api/auth/local/register`,
        {
          username,
          email,
          password,
        }
      );
      res.data && navigate("/login");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <form
        onSubmit={onSubmitHandler}
        className='mx-auto mt-4 block text-lg font-semibold text-slate-900 sm:max-w-2xl lg:flex lg:flex-col lg:items-center lg:p-0'
      >
        <label htmlFor='name' className='md:text-center'>
          Username
        </label>
        <input
          id='name'
          type='name'
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
          className='input-field'
          required='true'
        />

        <label htmlFor='email' className='md:text-center'>
          Email
        </label>
        <input
          id='email'
          type='email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          className='input-field'
          required='true'
        />

        <label htmlFor='password' className='md:text-center'>
          Password
        </label>
        <span className='block text-xs text-red-400'>
          Password must be 6 characters minimum!
        </span>
        <input
          type='password'
          placeholder='********'
          onChange={(e) => setPassword(e.target.value)}
          className='input-field'
          required='true'
        />
        <button
          type='submit'
          className='mx-auto mt-12 block w-full max-w-[30%] whitespace-nowrap rounded-md bg-button py-3 text-white hover:opacity-80'
        >
          Sign up
        </button>
        {error &&
          alert(
            "something went wrong! and your password must be minimum 6 characters"
          )}
      </form>
    </div>
  );
}

export default RegisterInput;
