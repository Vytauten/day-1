/*7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.

*
* *
* * *
* * * *
* * * * * */

function ciklas() {
    for (let i = 1; i <= 5; i++) {  
        let zvaigzdes = ''; 
        for (let j = 1; j <= i; j++) {  
            zvaigzdes += '* ';
        }
        console.log(zvaigzdes);
    }
}

ciklas()

