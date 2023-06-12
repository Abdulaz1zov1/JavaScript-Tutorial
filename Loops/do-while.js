function abdulazizov(x, y){
    do {
        y++
        console.log(y)
    }
    while(y < x)
}

abdulazizov(10, 0)



console.log('// ------------------------------')


/* continue */
i = 1
while (i <= 20) {
  if (i % 2 == 0) {
    i++
    continue
    console.log('just in even num continue')
  }
  console.log(i)
  i++
}