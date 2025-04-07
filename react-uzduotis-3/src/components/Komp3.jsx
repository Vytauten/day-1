

const Komp3 = () => {
  
    const studentas = {
        vardas: "Jonas",
        pavardė: "Antonas",
        mokykla: "Salama",
        vidurkis: 8,
        kuras: 3,
    };
  
    return (
    <div>
        <h1>Komp3</h1>
        <h2>Studento info</h2>
        <p>
            Vardas: {studentas.vardas}
        </p>
        <p>
            pavardė: {studentas.pavardė}
        </p>
        <p>
            Mokykla: {studentas.mokykla}
        </p>
        <p>
        vidurkisidurkis: {studentas.vidurkis}
        </p>
    </div>
  )
}

export default Komp3