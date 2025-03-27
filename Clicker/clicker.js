window.addEventListener('load', function() {
    
    let scoreBlock = document.querySelector('.main-game .score');
    let score = 0;
    let ownedFactories = [];

    document.querySelector('.main-game .click-zone').onclick = function() {
        score += 10;
        scoreBlock.innerText = score;
    }

document.querySelectorAll('.factory').forEach((fc) => {
    let factory = {
        title: fc.querySelector('.title').innerText,
        cost: parseInt(fc.querySelector('.price').innerText),
        isAdding: parseInt(fc.querySelector('.adds').innerText),
        count: parseInt(fc.querySelector('.count').innerText.slice(1, -1)),
        button: fc.querySelector('button')
    };

factory.button.onclick = function() {
    if (score >= factory.cost) {
        score -= factory.cost;
        factory.count++;
        scoreBlock.innerText = score;
        fc.querySelector('.count').innerText = '(' + factory.count + ')';
        
    }
}
   
    ownedFactories.push(factory);
    
})

setInterval(function() {
    score += ownedFactories.map(x => x.count * x.isAdding).reduce((partial_sum, number) => partial_sum + 
number, 0);
scoreBlock.innerText = score;
}, 1000);


console.log(ownedFactories)

});


