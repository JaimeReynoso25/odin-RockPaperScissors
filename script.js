function shoot(x) {
    switch (x) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

console.log(shoot(Math.floor(Math.random() * 3)))
  