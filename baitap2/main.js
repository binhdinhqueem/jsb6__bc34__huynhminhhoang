document.getElementById("btnTotal").onclick = function multiple(){
    let x = document.getElementById("xNumber").value*1;
    let n = document.getElementById("yNumber").value*1;
    let result = 0;
    for(let i = 1; i <= n; i++ ){
        result += Math.pow(x, i)
    }
    document.getElementById("notifiCation").innerHTML = "Tổng: " + result;
}