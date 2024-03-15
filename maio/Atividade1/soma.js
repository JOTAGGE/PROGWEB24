function soma(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    var sum = parseInt(n1) + parseInt(n2) + parseInt(n3);
    document.getElementById("soma").innerHTML = sum;
}