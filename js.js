function calculate(){
    display.value = eval(display.value);
}
        
function Percentage() {
    var value = parseFloat(document.getElementById("display").value);
    var percentage = value / 100;
    document.getElementById("display").value = percentage;
}