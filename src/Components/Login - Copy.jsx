import React, { useState, useEffect } from "react";
import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
const Login = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confrimPassword: "",
    isAccepted: false
  });

  const [errors, setErorrs] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErorrs(validate(data));
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(errors).length) {
      notify("succes your sing UP", "succes");
    } else {
      setTouched({
        name: true,
        password: true,
        email: true,
        confrimPassword: true,
        isAccepted: true
      });
      notify("invalid data", "error");
    }
    notify();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Login page</h1>
        <div>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.name && touched.name && errors.name}
        </div>
        <div>
          <label>Email</label>
          <input
            type='text'
            name='email'
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && errors.email}
        </div>
        <div>
          <label>Password</label>
          <input
            type='password'
            name='password'
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touched.password && errors.password}
        </div>
        <div>
          <label>Confrim Password</label>
          <input
            type='password'
            name='confrimPassword'
            value={data.confrimPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.confrimPassword &&
            touched.confrimPassword &&
            errors.confrimPassword}
        </div>
        <div>
          <label>I accepted this terms</label>
          <input
            type='checkbox'
            name='isAccepted'
            value={data.isAccepted}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.isAccepted && touched.isAccepted && errors.isAccepted}
        </div>
        <button onClick={submitHandler}>submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
