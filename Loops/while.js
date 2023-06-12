function abdulazizov(x, y){
    while(y < x){
        y++;
        console.log(y)
    }
}

abdulazizov(10, 0)

console.log('// ------------------------------');


/* break */

let i = 1;
while (i <= 10) {
  if (i == 5) {
    break;
  }
  console.log(i);
  i++
}