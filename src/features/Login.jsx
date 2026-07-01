import React from 'react'
import { useSelector } from 'react-redux'

function Login() {
    const login = useSelector((state) => state.login.value);

  return (
    <div>
      <p>Login: {login}</p>
    </div>
  )
}

export default Login;
