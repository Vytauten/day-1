/*10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka. */


function slaptazodis() {
    let skaiciai = Math.floor(Math.random() * 100000000)
    let didRaide = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    let didziojiRaide = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    let simboliai = '!@#$%^&*()_+-=[]{}|;:",.<>?/`~'
    let betKoksSimbolis = simboliai[Math.floor(Math.random() * simboliai.length)];
    let slaptazodis = (skaiciai + didRaide + didziojiRaide +  betKoksSimbolis)
    console.log(slaptazodis)
}

slaptazodis()