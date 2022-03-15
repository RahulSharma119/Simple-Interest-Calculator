window.onload = () => {document.getElementById("rate").value = 5;rateValueUpdate();}

function compute()
{
    p = document.getElementById("principal").value;
    if(p == "" || p <= 0) {alert("Enter a positive number");document.getElementById("principal").focus() ; return false;}
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    p = parseFloat(p);
    rate = parseFloat(rate);
    years = parseInt(years);
    interest = (p*rate*years)/100;
    document.getElementById("outputPrincipal").innerHTML = p;
    document.getElementById("outputRate").innerHTML = rate;
    document.getElementById("outputAmount").innerHTML = (p+interest);
    var year = new Date().getFullYear() + parseInt(years);
    document.getElementById("outputYear").innerHTML = year;
    document.getElementById("output").style.display = "block";

}

function rateValueUpdate(){
    document.getElementById("rateValueShow").innerHTML = document.getElementById("rate").value + '%';
}