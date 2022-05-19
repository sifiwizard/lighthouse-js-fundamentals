function lastIndexOf(array,num) {
  let index = array.reverse().indexOf(num);
  return index < 0 ? index : -index + array.length -1;
}

console.log(lastIndexOf([], 3));