import { useState } from "react";

function Child({ handleClick }) {
  return <button onMouseEnter={handleClick}>Move Your mouse in and out</button>;
}
const operatio = { multiply: "22", divide: "657" };

const { multiply } = { multiply: "22", divide: "657" };

console.log(multiply);
console.log(operatio.multiply);
const Hijo = ({ multiply, divide }) => {
  return <button onClick={multiply}>Multiply</button>;
};

export default function App() {
  const [count, setCount] = useState(0);
  const [mult, setMult] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  const multiply = (event, num) => {
    setMult(mult + num);
  };
  const clickar = (e) => {
    e.preventDefault();
    const v1 = parseInt(e.target.valor1.value, 10);
    const v2 = parseInt(e.target.valor2.value, 10);
    const suma = v1 + v2;
    return alert("La suma es:" + suma);
  };

  return (
    <div>
      <form onSubmit={clickar}>
        <p>
          Ingrese primer valor:
          <input type="number" name="valor1" />
        </p>
        <p>
          Ingrese segundo valor:
          <input type="number" name="valor2" />
        </p>
        <p>
          <input type="submit" value="Sumar" />
        </p>
      </form>
      <h2>Multiply X 100:{mult}</h2>
      <h2>Count is: {count}</h2>
      <Hijo multiply={(event) => multiply(event, 100)} />
      <Child handleClick={handleClick} />
    </div>
  );
}
