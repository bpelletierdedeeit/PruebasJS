import "./styles.css";
import Testcomponent from "./testcomponent";
import Horas from "./horas";

export default function App() {
  const current = new Date();

  const currenttime = new Date();
  const time = `${current.toLocaleTimeString()}`;
  console.log(currenttime);

  function Welcome(propiedades) {
    return <h1>Hello, my name is {propiedades.name}</h1>;
  }
  const testfunction = (a) => {
    return a;
  };

  function Saludo(Soy) {
    return <h1>Hola, {Soy.nombre} </h1>;
  }
  let Saludar = (names) => `Hola ${names}`;
  console.log(Saludar("Jonathan")); //Imprime Hola Jonathan

  // function testfunction2({a}) {
  //   return a
  // }
  return (
    <>
      <div className="App">
        <Horas />
        <Testcomponent />
        <Welcome name="Sara" />
        <Saludo nombre="Jhon" />
        <Saludar />
        {testfunction(2)}
        <h1>Current Time is{time}</h1>

        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </>
  );
}
