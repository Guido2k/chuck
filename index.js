
function goolash () {

 let picNum = Math.floor(Math.random()*(7 - 1) + 1);
 console.log(picNum);
if (picNum == 1) {
 document.getElementById("chuckPic").src="images/chuck1.png";
 
} else if (picNum == 2) {
    document.getElementById("chuckPic").src="images/chuck2.png";

} else if (picNum == 3) {
    document.getElementById("chuckPic").src="images/chuck3.png";

}  else if (picNum == 4) {
    document.getElementById("chuckPic").src="images/chuck4.png";

} else if (picNum == 5) {
    document.getElementById("chuckPic").src="images/chuck5.png";

} else if(picNum == 6) {
    document.getElementById("chuckPic").src="images/chuck6.png";

}





}







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
        goolash();
        
    }
}


xhr.open("GET", url);
xhr.send();


console.log(xhr);

