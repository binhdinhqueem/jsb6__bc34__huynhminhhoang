document.getElementById("btnTotal").onclick = function(){
    let sum = 0;
    let number = 0;
    
    while (sum < 10000){
        number++;
        sum += number;
    }
    document.getElementById("notifiCation").innerHTML = "Số nguyên dương nhỏ nhất là: " + number;
}