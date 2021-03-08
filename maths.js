
var answer;
var score = 0;
var backgroundImages = [];

function nextQuestion() {
    const n1 = Math.floor(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;
    const n2 = Math.floor(Math.random() * 6);
    document.getElementById('n2').innerHTML = n2;
    answer = n1+n2;
}

var numeroDominadas = 10;

function checkAnswer() {

    
    const prediction = predictImage();
    console.log(`answer:${answer}, prediction: ${prediction}`);

    if (answer==prediction){
        score++;
        console.log(`Correct! Score: ${score}`);
        if (score<=6){
            backgroundImages.pop();
            backgroundImages.push(`url('images2/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
            numeroDominadas = numeroDominadas+2;
        } else {
            alert('Bien hecho. Has aprendido a sumar a base de dominadas')
            score = 0;
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages;
            numeroDominadas = 10;
        }
    } else {
        if (score!=0) {score--}
        numeroDominadas = numeroDominadas+2;
        console.log(`Wrong! Score: ${score}`);
        alert('Primo piensa mejor o escribe bien el numero. Escribe dentro del cuadro sin tocar los bordes, mendrugo');
        setTimeout(function () {
            backgroundImages.pop();
            document.body.style.backgroundImage = backgroundImages;
        }, 1000);
    }
    return numeroDominadas
}