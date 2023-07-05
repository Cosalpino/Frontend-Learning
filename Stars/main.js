var activeStars = document.getElementsByClassName('star--active');
var percentage = document.getElementById("percentage");



function starClicked(obj) {

    if( obj.classList.contains("star--active")) obj.classList.remove("star--active")
    else obj.classList.add("star--active")

    var total =  activeStars.length * 100 / 5;
    percentage.innerHTML = total.toString() + "%";

    console.log(activeStars);
}