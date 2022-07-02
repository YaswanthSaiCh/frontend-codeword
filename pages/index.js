import Head from 'next/head'
import { useState } from 'react'
import { TextField, Button, IconButton, InputAdornment } from '@mui/material'
import PasswordValidator from './PasswordValidator'
import styles from '../styles/Home.module.css'
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


const isNumberRegx = /\d/;
const isCharRegx = /[A-Za-z]/;
const specialCharacterRegx = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

export default function Home() {

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordValidity, setPasswordValidity] = useState({
    minLen: null,
    minChar: null,
    number: null,
    specialChar: null

  });

  const handleChange = (e) => {
    const password = e.target.value;
    setPassword(password);

    setPasswordValidity({
      minLen: password.length >= 6 ? true : false,
      minChar: isCharRegx.test(password) ? true : false,
      number: isNumberRegx.test(password) ? true : false,
      specialChar: specialCharacterRegx.test(password) ? true : false
    });

  }
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Password Checker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Password Checker</h1>
        <form className={styles.formContainer}>
          <TextField
            sx={{ width: 500 }}
            className={styles.formTextField}
            id="outlined-basic"
            label="User Name"
            variant="outlined" />

          <TextField
            required
            sx={{ width: 500 }}
            className={styles.formTextField}
            onFocus={() => setPasswordFocused(true)}
            onChange={handleChange}
            id="outlined-basic"
            label="Password"
            type={values.showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
            value={password}
            variant="outlined"
          />
          {passwordFocused && (
            <PasswordValidator
              validity={passwordValidity}
            />
          )}
          <Button
            className={styles.formTextField}
            sx={{ width: 100 }}
            variant="contained"
            onSubmit={handleSubmit}
          >
            SUBMIT
          </Button>
        </form>
      </main>
    </div>
  )
}