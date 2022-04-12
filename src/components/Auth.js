import React, {useState} from 'react'
import classes from './Auth.module.css';
import {useDispatch} from 'react-redux'
import {authActions} from '../store/auth'

const Auth = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState(false)

  const getEmail = (e) => {
    setEmail(e.target.value)
    
  }

  const getPassword = (e) => {
    setPassword(e.target.value)
    
  }

  const dispatch = useDispatch()
  const loginHandler = (e) => {
    e.preventDefault()
    if (email === '' && password === ''){
      setErrMsg(true)
      return 
    }
    dispatch(authActions.login())
  }
  return (
    <main className={classes.auth}>
      <section>
      {errMsg && <p>Please fill in the form to access the app</p>}
        <form onSubmit = {loginHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' onChange = {getEmail} value = {email}/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' onChange = {getPassword} value = {password}/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;