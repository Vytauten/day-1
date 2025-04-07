

const Skaicius = () => {
  let skaicius = Math.floor(Math.random() * 100);
  
  const arLyginis = () => {
    if (skaicius % 2 === 0) {
        return (`Skaicius ${skaicius} yra lyginis`)
    } else {
        return (`Skaicius ${skaicius} yra nelyginis`)
    }
  }

  const arTeigimas = () => {
if (skaicius > 0) {
    return (`Skaicius ${skaicius} yra teigimas`)
} else if (skaicius < 0) {
    return (`Skaicius ${skaicius} yra neigimas`)
} else {
    return (`Skaicius yra ${skaicius} yra 0`)
}
  }
    
  
  return (
    <div>
        <h1>Skaicius</h1>
        <h4>{skaicius}</h4>
        <h5>{arLyginis()}</h5>
        <h5>{arTeigimas()}</h5>
       
    </div>
  )
}

export default Skaicius