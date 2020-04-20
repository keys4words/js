let drink = 0;

function shoot(arrow, headshot, fail){
    console.log('You are shooting...');
    setTimeout(function(){
        Math.random() > .5 ? headshot({}) : fail('You are missed');
    }, 3000)
};

function win() {
    console.log('You are win!');
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log('You have bought beer');
}

function giveMoney(){
    console.log("You've got a money!");
}

function lose(){
    console.log('You are lose!');
    
}

shoot({},
    function(mark){
        console.log('You made a headshot!');
        win(mark, buyBeer, giveMoney);
    }, function(miss){
        console.error(miss);
        lose();
    });