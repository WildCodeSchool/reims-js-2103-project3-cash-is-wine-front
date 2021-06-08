import React, { useRef } from 'react';

function Register() {
  const emailInput = useRef();
  const passwordInput = useRef();

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      const user = {
        email: emailInput.current.value,
        password: passwordInput.current.value,
      };
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      };
      fetch('http://localhost:8000/users', config).then((res) => res.json()).then((data) => {
        console.log(data);
      });
    }}
    >
      <label htmlFor="email">Email</label>
      <input ref={emailInput} type="email" id="email" name="email" placeholder="cashinwine@mail.com" />
      <label htmlFor="password">Mot de passe</label>
      <input ref={passwordInput} type="password" id="password" name="password" />
      <button type="submit">Confirmer</button>
    </form>
  );
}

export default Register;
