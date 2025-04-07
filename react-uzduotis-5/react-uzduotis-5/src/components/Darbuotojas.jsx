

const Darbuotojas = () => {
  const darbuotojas = {
    vardas: "Domas",
    profesija: "Snaiperis",
    atlyginimas: 1000000,
    etatas: "pagrindinis",
    darboStazas: 15,
  }

  function uzdarbis () {
    let isViso = ((darbuotojas.atlyginimas * 12) * 15)
    return isViso
  }

  function arVeteranas () {
    if(darbuotojas.darboStazas >= 5) {
        return (`Darbuotojas su ${darbuotojas.darboStazas} m. patiritimi yra veteranas`)
    } else if (darbuotojas.darboStazas < 5) {
        return (`Darbuotojas su ${darbuotojas.darboStazas} m. patiritimi skaitosi naujokas`)
    } else {
        return (`bedarbis`)
    }
  }

  function arDaugiau (a) {
if (a > darbuotojas.atlyginimas) {
    return (`Darbuotojo atlyginimas: ${darbuotojas.atlyginimas} yra maziau negu ${a}`)
} else if (a < darbuotojas.atlyginimas) {
    return (`Darbuotojo atlyginimas: ${darbuotojas.atlyginimas} yra daugiau negu ${a}`)
} else {
    return (`darbuotojas su atlyginimu: ${darbuotojas.atlyginimas} uždirba tiek pat kiek ${a}`)
}
  }
  
let uzdabisGal = 45;
    return (
    <div>
        <h2>Darbuotojas</h2>
        
            
<div>
    <h4>Darbuotojo vardas: {darbuotojas.vardas}</h4>
    <p>Profesija: {darbuotojas.profesija}</p>
    <p>Atlyginimas: {darbuotojas.atlyginimas}</p>
    <p>Etatas: {darbuotojas.etatas}</p>
    <p>Darbo stažas: {darbuotojas.darboStazas}</p>
    <h3>Is viso uzdurbo per karjera: {uzdarbis()} eur.</h3>
    <h3>{arVeteranas()}</h3>
    <h3>{arDaugiau(uzdabisGal)}</h3>
</div>
          
        

    </div>
  )
}

export default Darbuotojas