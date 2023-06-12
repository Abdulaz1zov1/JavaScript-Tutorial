const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(1)
    }, 2000)
});


p.then(result => console.log("Successfully returned a result", result))
    .catch(err => console.log("Error arrived"));


const r = new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject(new Error('123Error')); 
    }, 2000)
});

r.catch(result => console.log("Successfully returned a result", result));