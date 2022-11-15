const Horas = () => {
  const current = new Date();
  // const fechaMesDia=(current.getDate)

  let fecha = new Date(),
    hora = fecha.getHours();

  let Saludo = (hora: number) => {
    if (hora <= 5) {
      return "No me jodas!!!";
    } else if (hora >= 6 && hora <= 11) {
      return "Buenos días!!!";
    } else if (hora >= 12 && hora <= 18) {
      return "Buenas tardes!!!";
    } else {
      return "Buenas noches!!!";
    }
  };

  console.log(Saludo(hora)); //Imprime el saludo dependiendo la hora del día

  return (
    <div>
      <span>
        <Saludo />
      </span>
    </div>
  );
};
export default Horas;
