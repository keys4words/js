let drink = 0;

function shoot(arrow) {
    console.log('You are shooting...');

    let promise = new Promise(function(resolve, reject){
        setTimeout(function () {
            Math.random() > .5 ? resolve({}) : reject('You are missed');
        }, 3000);
    });

    return promise;
    
};

function win() {
    console.log('You are win!');
    (drink == 1) ? buyBeer(): giveMoney();
}

function buyBeer() {
    console.log('You have bought beer');
}

function giveMoney() {
    console.log("You've got a money!");
}

function lose() {
    console.log('You are lose!');

}

shoot({})
    .then(mark => console.log('You are win!'))
    .then(win)
    .catch(lose)
    