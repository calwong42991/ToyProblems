const combination = function(arr, round = 3){
  let combos = [];

  let comboGenerator = function(playedSoFar, roundsToGo){
    if(roundsToGo === 0){
      combos.push(playedSoFar);
      return;
    }

    for(let i = 0; i < arr.length; i++){
      comboGenerator(playedSoFar.concat(arr[i]), roundsToGo -1 )
    }

  }
  comboGenerator([], round);
  return combos;
}

console.log(combination(['rock', 'paper', 'scissors'], 4));