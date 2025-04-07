
/*3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body

    mass index), kai yra žinomas žmogaus ūgis ir svoris.*/

    let ugis = Math.floor(Math.random() * (220 - 150 + 1)) + 150;
    let svorisKg = Math.floor(Math.random() * (150 - 100 + 1)) + 50;
    let ugisMetrais = ugis / 100
  
    console.log(svorisKg, ugisMetrais)
    
    function BMI(ugisMetrais, svorisKg) {
let BMI = svorisKg / (ugisMetrais * ugisMetrais)
let BMIFixed = BMI.toFixed(2)

console.log("BMI yra:", BMIFixed)
    }

    BMI(ugisMetrais, svorisKg)