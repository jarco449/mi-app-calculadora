import React, { useState } from 'react';
import { evaluate } from 'mathjs'; // ✅ Importar mathjs
import './Calculadora.css';

const Calculadora = () => {
  const [input, setInput] = useState('');

  const agregarInput = (valor) => {
    setInput((prev) => prev + valor);
  };

  const borrarTodo = () => {
    setInput('');
  };

  const calcularResultado = () => {
    try {
      const resultado = evaluate(input); // ✅ Sin eval ni Function
      setInput(resultado.toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="calculadora">
      <input className="pantalla" type="text" value={input} readOnly />
      <div className="botones">
        {'123+456-789*0./'.split('').map((val) => (
          <button key={val} onClick={() => agregarInput(val)}>{val}</button>
        ))}
        <button onClick={borrarTodo}>C</button>
        <button onClick={calcularResultado}>=</button>
      </div>
    </div>
  );
};

export default Calculadora;
