function getData(token, username) {
    setTimeout(function () {
        username({ token: token, name: "oyatillo" })
    }, 2000)
}
function caller(user) {
    console.log(user);
}

getData("176sdta7s6dt7a6syufguyfuyfiyfuyf7f6f676if6id66ci6v6beiebiv6dra76sd", caller, caller);
