import React, { useState, useEffect } from "react";
import styles from "./SingUp.module.css";

import { validate } from "./validate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./toast";
import { Link } from "react-router-dom";

const SingUp = () => {
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
    setErorrs(validate(data, "singUp"));
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
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <h1 className={styles.header}>SingUp page</h1>
        <div className={styles.formField}>
          <label>Name</label>
          <input
            className={
              errors.name && touched.name
                ? styles.uncompleted
                : styles.formInput
            }
            type='text'
            name='name'
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.name && touched.name && <span> errors.name</span>}
        </div>

        <div className={styles.formField}>
          <label>Email</label>
          <input
            className={
              errors.email && touched.email
                ? styles.uncompleted
                : styles.formInput
            }
            type='text'
            name='email'
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.email && touched.email && <span> errors.email</span>}
        </div>

        <div className={styles.formField}>
          <label>Password</label>
          <input
            className={
              errors.password && touched.password
                ? styles.uncompleted
                : styles.formInput
            }
            type='password'
            name='password'
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.password && touched.password && <span> errors.password</span>}
        </div>

        <div className={styles.formField}>
          <label>Confrim Password</label>
          <input
            className={
              errors.confrimPassword && touched.confrimPassword
                ? styles.uncompleted
                : styles.formInput
            }
            type='password'
            name='confrimPassword'
            value={data.confrimPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          {errors.confrimPassword && touched.confrimPassword && (
            <span>{errors.confrimPassword}</span>
          )}
        </div>

        <div className={styles.formField}>
          <div className={styles.checkBoxContainer}>
            <label>I accepted this terms</label>

            <input
              className={
                errors.isAccepted && touched.isAccepted
                  ? styles.uncompleted
                  : styles.formInput
              }
              type='checkbox'
              name='isAccepted'
              value={data.isAccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>
          {errors.isAccepted && touched.isAccepted && (
            <span> errors.isAccepted</span>
          )}
        </div>

        <div className={styles.formButtons}>
          <Link to='/login'>Login</Link>
          <button type='submit'>Sign Up</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SingUp;
