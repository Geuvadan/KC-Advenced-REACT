import React, { useState, createContext, useContext } from 'react';

const SignContext = createContext();

export function SignFormProvider(props) {
  const [data, setData] = useState({ username: '', password: '' });

  const handleInput = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const value = {
    data,
    setData,
    handleInput,
  };

  return <SignContext.Provider value={value} {...props} />;
}

export function useSignForm() {
  const context = useContext(SignContext);
  if (!context) {
    console.error('useForm must be inside FormContext provider');
  }
  return context;
}
