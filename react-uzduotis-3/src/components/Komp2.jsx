

const Komp2 = () => {
  
    let skaiciai = [
        1, 2, 3, 4, 5, 6, 7
    ]
  
    return (
    <div>
        <h2>Skaiciai</h2>
        <p>{skaiciai.join(", ")}</p>
        <p>Skaicius pirmas: {skaiciai[0]}</p>
        <p>Skaicius antras:{skaiciai[1]}</p>
        <p>Skaicius penktas:{skaiciai[4]}</p>
        <p>{skaiciai[skaiciai.length -1]}</p>
        <p>{skaiciai.length}</p>
    </div>
  )
}

export default Komp2