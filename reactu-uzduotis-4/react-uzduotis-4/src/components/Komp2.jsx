

const Komp2 = () => {
  
    let skaicus1 = 23;
    let skaicus2 = 45;

    const didesnis = () => {
        if (!skaicus1 || !skaicus2) return "";
        
        if(skaicus1 > skaicus2) {
            return `${skaicus1} "didensi uz ${skaicus2} `;
        } else if (skaicus2 > skaicus1) {
            return `${skaicus2} "didensi uz ${skaicus1} `;
        } else {
            return `${skaicus2} yra lygus ${skaicus1}`;
        }
    };

    const mazesnis = () => {
        if (!skaicus1 || !skaicus2) return "";
        
        if(skaicus1 < skaicus2) {
            return `${skaicus1} "mazesnis uz ${skaicus2} `;
        } else if (skaicus2 < skaicus1) {
            return `${skaicus2} "mazesnis uz ${skaicus1} `;
        } else {
            return `${skaicus2} yra lygus ${skaicus1}`;
        }
    };

  
    return (
    <div>
        <h2>Didsenis / mazesnis skaicius</h2>
        <p>turimi skaiciai: {skaicus1}, {skaicus2}</p>
        <p>{didesnis() }</p>
        <p>{mazesnis() }</p>
    </div>
  )
}

export default Komp2