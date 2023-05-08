function calculate(){
    input.value = eval(input.value);
}
        
function Percentage() {
    var value = parseFloat(document.getElementById("input").value);
    var percentage = value / 100;
    document.getElementById("input").value = percentage;
}
function clear() {
  document.getElementById("input").value = "";
}