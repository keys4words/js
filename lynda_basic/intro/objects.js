var player = new Object();
player.name = "Fred";
player.score = 104444;
player.rank = "expert";

var player1 = {name: "max", score: 10000, rank: "beginner"};

//console.log(player1);

function showPlayerDetails(){
    console.log(this.name + " has a score " + this.rank + " with score "
    + this.score);
}

player.details = showPlayerDetails;
player1.details = showPlayerDetails;

player.details();
player1.details();