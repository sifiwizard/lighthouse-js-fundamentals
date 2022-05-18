let start = 100;
while (start <= 200){
  if (start % 3 === 0 && start % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (start % 3 === 0) {
    console.log("Loopy");
  } else if (start % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(start);
  }
  start ++;
}