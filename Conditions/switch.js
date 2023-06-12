function abdulazizov(x){
    switch(x){
        case 1:
            console.log(false)
            break
        case 2:
            console.log(true)
            break
        default:
            setTimeout(function(){
                console.log(undefined)
            },1000)
    }
}

abdulazizov(3)