var percentage = document.getElementById("percentage");

function starClicked(obj) {

    var total =  obj * 100 / 5;

    document.getElementById("stars").style.setProperty("--pc",  total.toString() + "%");
    percentage.innerHTML = total.toString() + "%";
}