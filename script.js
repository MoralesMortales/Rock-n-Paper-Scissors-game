let round = 0;
let elements = document.getElementsByClassName("fa-regular");

class object {
  constructor(rock, scissors, paper, points) {
    this.rock = false;
    this.scissors = false;
    this.paper = false;
    this.points = 0;
  }

  asign(val) {
    to_black();
    switch (val) {
      case "r":
        this.rock = true;
        break;
      case "p":
        this.paper = true;
        break;
      case "s":
        this.scissors = true;
        break;
      default:
        console.log("error");
        break;
    }
    play();
  }

  resete() {
    this.rock = false;
    this.scissors = false;
    this.paper = false;
  }
}

const player1 = new object();
const playerIA = new object();

let rock_e = document.getElementById("box1");
let paper_e = document.getElementById("box2");
let scissors_e = document.getElementById("box3");

let rock_u = document.getElementById("box1b");
let paper_u = document.getElementById("box2b");
let scissors_u = document.getElementById("box3b");

function to_black() {
  rock_e.style.color = "black";
  paper_e.style.color = "black";
  scissors_e.style.color = "black";

  rock_u.style.color = "black";
  paper_u.style.color = "black";
  scissors_u.style.color = "black";
}

function print() {
  console.log(
    `Round ${round} | Player points (${player1.points}) - IA points (${playerIA.points})`
  );
}

function play() {
  let ia = Math.random();

  if (ia < 1 / 3) {
    console.log("rock");
    playerIA.rock = true;
    rock_e.style.color = "#fff";
  } else if (ia >= 1 / 3 && ia < 2 / 3) {
    playerIA.scissors = true;
    scissors_e.style.color = "#fff";
  } else {
    playerIA.paper = true;
    paper_e.style.color = "#fff";
    console.log("paper");
  }

  if (player1.rock == true && playerIA.rock == true) {
    round++;
    rock_e.style.color = "#04f";
    rock_u.style.color = "#04f";
  } else if (player1.rock == true && playerIA.paper == true) {
    playerIA.points++;
    rock_u.style.color = "#f00";
    paper_e.style.color = "#0f0";
    round++;
  } else if (player1.rock == true && playerIA.scissors == true) {
    player1.points++;
    rock_u.style.color = "#0f0";
    scissors_e.style.color = "#f00";
    round++;
  } else if (player1.scissors == true && playerIA.scissors == true) {
    round++;
    scissors_u.style.color = "#04f";
    scissors_e.style.color = "#04f";
  } else if (player1.scissors == true && playerIA.paper == true) {
    player1.points++;
    scissors_u.style.color = "#0f0";
    paper_e.style.color = "#f00";
    round++;
  } else if (player1.scissors == true && playerIA.rock == true) {
    playerIA.points++;
    scissors_u.style.color = "#f00";
    rock_e.style.color = "#0f0";
    round++;
  } else if (player1.paper == true && playerIA.paper == true) {
    round++;
    paper_u.style.color = "#04f";
    paper_e.style.color = "#04f";
  } else if (player1.paper == true && playerIA.scissors == true) {
    playerIA.points++;
    paper_u.style.color = "#f00";
    scissors_e.style.color = "#0f0";
    round++;
  } else if (player1.paper == true && playerIA.rock == true) {
    player1.points++;
    paper_u.style.color = "#0f0";
    rock_e.style.color = "#f00";
    round++;
  }
  player1.resete();
  playerIA.resete();
  print();
}
