

const TrysSkaiciai = () => {
  
    let skaicius1 = Math.floor(Math.random() * 100);
    let skaicius2 = Math.floor(Math.random() * 100);
    let skaicius3 = Math.floor(Math.random() * 100);


    function visiSkaicia(a, b, c) {
return (`Skaiciai yra: ${a}, ${b}, ${c}`)
    }

    const suma = (a, b, c) => {
let isViso = (a + b + c)
return (`skaiciu suma yra: ${isViso}`)
    }
  
  
    return (
    <div>
        <h2>Trys skaiciai</h2>
        <p>{visiSkaicia(skaicius1, skaicius2, skaicius3)}</p>
        <p>{suma(skaicius1, skaicius2, skaicius3)}</p>
    </div>
  )
}

export default TrysSkaiciai