

const PrekiuKrepselis = () => {
  
    const prekes = [
        {
            id: 1,
            pavadinimas: "parkeris",
            kaina: 456,
            kiekis: 254,
            nuolaida: 12 + "%",
        },
        {
            id: 2,
            pavadinimas: "piestukas",
            kaina: 542,
            kiekis: 123,
            nuolaida: 45 + "%",
        },
        {
            id: 3,
            pavadinimas: "akiniai",
            kaina: 755,
            kiekis: 12,
            nuolaida: 2 + "%",
        },
        {
            id: 4,
            pavadinimas: "ziebtuvelis",
            kaina: 12,
            kiekis: 254,
            nuolaida: 4 + "%",
        },
        {
            id: 5,
            pavadinimas: "neasmone",
            kaina: 251200,
            kiekis: 213,
            nuolaida: 78 + "%",
        },
    ]
  
function parodyti () {
    return (`<div>
        <h1>Prekiu krepselis</h1>
        <table border="1" >
            <tr>
                <td>
                    id
                </td>
                <td>
                pavadinimas
                </td>
                <td>
                kaina
                </td>
                <td>
                kiekis
                </td>
                <td>
                nuolaida
                </td>
            </tr>
            ${prekes.map((preke) => (
            <tr>
                <td>
                    {preke.id}
                </td>
                <td>
                {preke.pavadinimas}
                </td>
                <td>
                {preke.kaina}
                </td>
                <td>
                {preke.kiekis}
                </td>
                <td>
                {preke.nuolaida}
                </td>
            </tr>))}

        </table>
    </div>`)
}

    return (
    <div>
        <h1>Prekiu krepselis</h1>
        <table border="1" >
            <tr>
                <td>
                    id
                </td>
                <td>
                pavadinimas
                </td>
                <td>
                kaina
                </td>
                <td>
                kiekis
                </td>
                <td>
                nuolaida
                </td>
            </tr>
            {prekes.map((preke) => (
            <tr>
                <td>
                    {preke.id}
                </td>
                <td>
                {preke.pavadinimas}
                </td>
                <td>
                {preke.kaina}
                </td>
                <td>
                {preke.kiekis}
                </td>
                <td>
                {preke.nuolaida}
                </td>
            </tr>))}

        </table>
        <div>{parodyti()}</div>
    </div>
  )
}

export default PrekiuKrepselis