function n(dato) {
    document.getElementById("op").value += dato ;
}
function op(){
    document.getElementById("op").value = eval(document.getElementById("op").value);
}
function Ripristina(){
    document.getElementById("op").value = '';
}