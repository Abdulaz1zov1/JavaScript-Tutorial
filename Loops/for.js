// 1. example
function abdulazizov(x){
    for(let i = 0; i < x; i++){
        console.log(i);
    }
}

abdulazizov(10)



console.log('// ------------------------------');


let arr = ["Monday", "TuesDay", "Wednesday"];

for (let i = 0; i <= arr.length; i++) {
  if (i == 3) {
    break;
  }
  console.log(arr[i]);
}



console.log('// ------------------------------');

for (i = 1; i <= 10; i++) {
  if (i === 5) {
    continue
    console.log('just after 5 continue...')
  }
  console.log(i)
}


