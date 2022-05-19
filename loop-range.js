function range(start,end,step) {
  let out = []
  if (step <= 0 || start > end || (start === undefined || end === undefined || step === undefined)){
    return out;
  } else {
    while (start <= end){
      out.push(start);
      start += step;
    }
  }
  return out;
}

console.log(range(-5,2,3));