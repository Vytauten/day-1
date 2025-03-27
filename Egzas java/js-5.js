/*5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai. */

let laipsniaiCelcijaus = (Math.random() * (30 - (-30)) - 30).toFixed(2)
let laipsniaiFarenhaito = Math.floor(Math.random() * 104)
console.log(laipsniaiCelcijaus, laipsniaiFarenhaito)

function laipsniai(laipsniaiCelcijaus, laipsniaiFarenhaito) {
    let celcijusIFarenhaita = (laipsniaiCelcijaus * (9 / 5) + 32).toFixed(2)
    let farenhaitasICelciju = ((laipsniaiFarenhaito - 32) * (5 / 9)).toFixed(2)
    
    console.log(`${laipsniaiCelcijaus} °C yra ${celcijusIFarenhaita} °F`)
    console.log(`${laipsniaiFarenhaito} °F yra ${farenhaitasICelciju} °C`)
}

laipsniai(laipsniaiCelcijaus, laipsniaiFarenhaito)