

const Komp4 = () => {
  const automobilis = {
    marke: "Lexus",
    modelis: "IS 250",
    metai: 2015,
    rida: 250000,
    kaina: 6000,
  };
  
  
    return (
    <div>
        <h1>Komp4</h1>
        <h2>Automobilio duomenys</h2>
        <p>
            <strong>Markė</strong> {automobilis.marke}
        </p>
        <p>
            <strong>Modelis</strong> {automobilis.modelis}
        </p>
        <p>
            <strong>Metai</strong> {automobilis.metai}
        </p>
        <p>
            <strong>Rida</strong> {automobilis.rida}
        </p>
    </div>
  )
}

export default Komp4