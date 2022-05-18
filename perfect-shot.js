function finalPosition(moves) {
  let perfectShot = [0,0]
  for (const move of moves) {
    switch (move) {
      case 'north':
        perfectShot[1] ++;
        break;
      case 'south':
        perfectShot[1] --;
        break;
      case 'east':
        perfectShot[0] ++;
        break;
      case 'west':
        perfectShot[0] --;
        break;
    }
  }
  return perfectShot;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));