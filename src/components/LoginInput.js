import PropTypes from 'prop-types';
import React from 'react';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChangeHandler] = useInput('');
  const [password, onPasswordChangeHandler] = useInput('');

  const onSubmitHandler = (e) => {
    e.preventDefault();

    login({ email, password });
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="m-8 block text-lg font-semibold text-slate-900 lg:flex lg:flex-col lg:items-center lg:p-0 sm:max-w-2xl mx-auto"
    >
      <label htmlFor="email" className="md:text-center">Email</label>
      <input
        id="email"
        type="email"
        placeholder="lazar@codeday.org"
        value={email}
        onChange={onEmailChangeHandler}
        className="input-field"
        required="true"
      />

      <label htmlFor="password" className="md:text-center">Password</label>
      <input
        type="password"
        placeholder="********"
        value={password}
        onChange={onPasswordChangeHandler}
        className="input-field"
        required="true"
      />
      <button type="submit" className="block w-full max-w-[30%] bg-[#2E277D] text-white mx-auto mt-12 px-5 py-3 rounded-md">
        Login
      </button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
