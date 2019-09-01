
function refreshPage() {
    window.location.reload();
}



let xhr = new XMLHttpRequest();
const url = "https://api.chucknorris.io/jokes/random";

xhr.onreadystatechange = function() {
    console.log(xhr.readyState);
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.response);

        let joke = JSON.parse(xhr.response);  // returns joke in object format
        console.log(joke.value);

        document.getElementById('content').innerHTML = joke.value;  // adds joke value to html (div)

    }
}


xhr.open("GET", url);
xhr.send();


console.log(xhr);
