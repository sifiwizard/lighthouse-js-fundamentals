function concat (array1,array2){
  for (const item of array2) {
    array1.push(item);
  }
  return array1;
}

console.log(concat([ 5, 10 ], []));