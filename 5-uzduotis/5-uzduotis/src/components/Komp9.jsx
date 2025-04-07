import "./Komp9.css"

const Komp9 = () => {
   
    const mokymai = [
        {pavadinimas: "programavimas", trukme: 45, kaina: 4555},
        {pavadinimas: "begimas", trukme: 145, kaina: 9999},
        {pavadinimas: "ejimas", trukme: 20, kaina: 9},
    ]
   
    return (
        <div className="mokymu-wrapper">
 
       
            {mokymai.map((mokymas) => (
                 <div className="mokymas2">
                <h2>Pavadinimas: {mokymas.pavadinimas}</h2>
                <h4>Trukmė: {mokymas.trukme} min.</h4>
                <h4>Kaina: {mokymas.kaina} eur.</h4>
                </div>))}
        
    </div>
    )
}

export default Komp9
