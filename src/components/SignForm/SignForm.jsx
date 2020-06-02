import React from 'react';
import { useSignForm } from '../SignContext/signContext';

export default function SignForm({ onSubmit }) {
  const { handleInput, data } = useSignForm();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(event);
      }}
    >
      <div>
        <label name="username">Nombre de usuario: </label>
        <input type="text" onChange={handleInput} value={data.username} name="username" />
      </div>
      <div>
        <label name="password">Contraseña: </label>
        <input type="password" onChange={handleInput} value={data.password} name="password" />
      </div>
      <button className="button" type="submit">
        Entrar
      </button>
    </form>
  );
}
