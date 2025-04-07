

const Komp5 = () => {
  const title = "Medžiai";
  const medziai = ["Uosis", "Beržas", "Ąžuolas", "Beržas", "Klevas"];
  
    return (
    <div>
        <h1>{title}</h1>
<ul>
    {medziai.map((medis) => (
        <li>{medis}</li>
    ))}
</ul>
    </div>
  )
}

export default Komp5