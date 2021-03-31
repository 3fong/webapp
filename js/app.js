
window.onload = function () {
    fetch('/app')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            document.getElementById("content").innerHTML = JSON.stringify(myJson)
        });
}