document.getElementById("btn").onclick = function gato() {
    fetch('https://api.thecatapi.com/v1/images/search?size=full').then(response => {
        return response.json()
    }).then(data => {
        var html = '<img src="' + data[0]["url"] + '">';
        document.getElementById("image").innerHTML = html;
    })
}