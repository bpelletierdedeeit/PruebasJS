import "./styles.css";
import Testcomponent from "./testcomponent";
import Horas from "./horas";
import Destructuring from "./destructuring";
import Contador from "./contador";
import Dice from "./dice";
import Albaran from "./albaran";
import Test from "./test";

import { useState } from "react";

export default function App() {
  // Current es una funcion. No tiene parametros dentro del parentesis.
  const current = new Date();
  const currenttime = new Date();
  const time = `${current.toLocaleTimeString()}`;
  console.log(currenttime);
  const siglo = 21;
  const numAleato = Math.trunc(Math.random() * 10);

  // const valor1 = Math.trunc(Math.random()*6)+1
  // const valor2 = Math.trunc(Math.random()*6)+1
  // const valor3 = Math.trunc(Math.random()*6)+1

  // mostrarTitulo es una funcion que contiene una propiedad (tit)
  const mostrarTitulo = (tit) => {
    return <h1>{tit}</h1>;
  };
  // const propiedades = { name: "xxx", surname: "yyy", middlename:"Trr" };

  // const { name, surname, middlename } = propiedades;

  //function Welcome(propiedades) {

  const generateNumber = () => {
    // clase y despues del punto propiedad. Tiene un parametro dentro del parentesis.
    return Math.trunc(Math.random() * 6) + 1;
  };

  const throwDice = () => {
    setNumber1(generateNumber());
    setNumber2(generateNumber());
    setNumber3(generateNumber());
  };
  // Contiene un array
  const [number1, setNumber1] = useState(generateNumber());
  const [number2, setNumber2] = useState(generateNumber());
  const [number3, setNumber3] = useState(generateNumber());

  const numeros = [1, 2, 3, 4, 5];
  const letters = ["a", "e", "i", "o", "u"];

  const listaNumeros = numeros.map(
    (numero) => <li>{numero}</li>
    // Si devolviera un return iria entre llaves
  );

  function LetterList({ letters }) {
    const listItems = letters.map((letter, index) => (
      // Si no se asigna una key, saldra un warning. Puede ser "i","index" o cualquiera
      <li key={index}>{letter}</li>
    ));
    return <ul>{listItems}</ul>;
  }

  const calculanombre = (nombre) => {
    console.log("EJECUTA CALCULA");
    return nombre;
  };

  // la funcion Welcome tiene una destructuracion. Extrae una propiedad.
  //Name, surName.. Son propiedades.

  function Welcome({ name, surname, residence, fn }) {
    console.log(fn);

    //fn('2222');

    return (
      <h1>
        Hello, my name is {name} {surname} I´m living in: {residence}
      </h1>
    );
  }
  // const testfunction = (a) => {
  //   return a;
  // };

  function Saludo({ nombre, apellidos, pepe }) {
    console.log(pepe);
    return <h1>Hola, {apellidos} </h1>;
  }

  function Saludo2({ nombre, apellidos, pepe }) {
    console.log(pepe);
    return `Hola, ${apellidos}`;
  }

  let Saludar = (names) => `Hola ${names}`;
  console.log(Saludar("Jonathan")); //Imprime Hola Jonathan

  return (
    <>
      <div className="App">
        {/* <Albaran />
        <Destructuring />
        <Horas />
        <Testcomponent />
        <LetterList letters={letters} />
        <ul>{listaNumeros}</ul>
        {/* //USANDO XML */}
        {/* //Invocamos a la funcion Welcome */}
        {/* <Welcome
          fn={(nombre) => calculanombre("Sata")}
          name={calculanombre("RRRR")}
          surname="10"
          residence="Las Vegas"
          onClick={(e) => {
            console.log("2222");
          }}
        /> */}
        {/* //USANDO JAVAS// */}
        {/* {Welcome({ name: "Raul," })}
        <h3>Llamada a un metodo que devuelve un numero aleatorio:</h3>
        {numAleato}
        {mostrarTitulo("Hola mundo")}
        {mostrarTitulo("FIN")} */}
        {/* <p>Siglo actual:</p>
        {siglo}
        <h3>Calculo inmediato de expresiones</h3>3 + 3 = {3 + 3}
        <Contador />
        <h3>Acceso a un objeto</h3>
        <Saludo nombre="John" apellidos="Woo" pepe="z" />
        <h1>{Saludo2({ nombre: "Raul", apellidos: "zzz" })}</h1>
        <Saludar /> */}
        {/* {testfunction(2)} */}
        {/* <h1>Current Time is{time}</h1> */}
        {/* <Dice valor={number1} />
        <Dice valor={number2} />
        <Dice valor={number3} /> */}
        {/* <button onClick={throwDice}>Throw Dice</button>  */}
        <Test />
      </div>
    </>
  );
}
