document.getElementById("btnTotal").onclick = function(){
    let m = document.getElementById("number").value * 1;
    let k = 1;

    for(let i = 1; i <= m; i++){
        k *= i;
    }
    document.getElementById("notifiCation").innerHTML = "Giai thừa: " + k;
}