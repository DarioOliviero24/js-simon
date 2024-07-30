const numS = 1;
const numL = 50;
const randomNumber = [];
const timeToWait = 30;

function getRandomNumber( min, max){
    return Math.floor(Math.random() * (max - min + 1) );
}

for ( let i = 0; i < 5; i++){
    
    let numeri = document.querySelectorAll('.numeri');
    let num = getRandomNumber( numS , numL);
    console.log(num);
    numeri[i].innerHTML = num;
}
