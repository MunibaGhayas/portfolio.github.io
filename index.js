console.log("script running....")
const hamburger = document.querySelector(".hamburger");
function myFunction(){
    var x = document.getElementById("myLinks");
    if (x.style.display === "block"){
        x.style.display = "none";
    } else{
      x.style.display = "block";
    }
}
function Close(){
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
    x.style.display = "block";
  }
}
