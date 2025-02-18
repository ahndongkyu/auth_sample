import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.name || !values.email || !values.password) {
      alert('입력값을 확인해주세요.');
      return;
    }

    axios
      .post('http://localhost:8080/register', values)
      .then((res) => {
        if (res.status === 201) {
          navigate('/login');
        } else {
          alert('회원가입에 실패했습니다.');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <h2>Sign-Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name..."
              name="name"
              className="form-control"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email..."
              name="email"
              className="form-control"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Your Password..."
              name="password"
              className="form-control"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn">
            Sign Up
          </button>
          <p>Agree to our Terms and Policies</p>
          <Link to="/login">Sign In</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
