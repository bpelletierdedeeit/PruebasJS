const Test = () => {
  const letra = "a";

  const Resultado = (gg) => {
    if (gg.numero > 10) {
      return "a";
    } else {
      return "b";
    }
  };

  const Resultado2 = () => "a";

  return (
    <div>
      a
      <br />
      {letra}
      <br />
      <Resultado numero="15" numero2="5" />
      <br />
      {Resultado({ numero: 10, numero2: 5 })}
    </div>
  );
};

export default Test;
