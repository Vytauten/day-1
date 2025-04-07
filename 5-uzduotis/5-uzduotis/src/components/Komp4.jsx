// TODO: prijunkite šį komponentą prie App.jsx

const Komp4 = () => {
    let filmas = {
        pavadinimas: 'Pulp Fiction',
        rezisierius: 'Quentin Tarantino',
        metai: 1994,
    };

    return (
        // TODO: į šio komponento div įstatykite
        // filmo pavadinimą, režisierių ir metus
        <div>
            <h3>
                Filmo pavadinimas: {filmas.pavadinimas}
            </h3>
            <h4>
Režisierius: {filmas.rezisierius}
            </h4>
            <h4>
Metai: {filmas.metai}
            </h4>
        </div>
    )
}

export default Komp4
