function lastIndexOf(array,num) {
  let index = array.length -1;
  while (index >= 0){
    if (array[index] == num){
      return index;
    }
    index --;
  }
  return index;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));