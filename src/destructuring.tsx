const DestructuringTest = () => {
  // function Test ({identifier,name}) {
  //   return <h1>Your are in: {name} Your IP is: {identifier}</h1>;
  // }

  const heroes = [{ name: "Batman &" }, { name: " Joker" }];

  const names = heroes.map(function ({ name }) {
    return name;
  });
  return names;

  // const hero = {
  //   hero: "Batman",
  //   realName: "Bruce Wayne",
  //   enemies:"Joker, Enigma, Herley, Penguin",
  //   address:
  //   {
  //     country: 'USA',
  //     city:'Gotham'
  //   }

  // };
  // const { address:{city} } = hero;

  // return city; // => 'Bruce Wayne'

  // // return (
  // //   <div>
  // //     <p><Test identifier="91.032.22743" name="Campello."/></p>
  // //   </div>
  // // );
};

export default DestructuringTest;
