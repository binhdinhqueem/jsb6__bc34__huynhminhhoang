document.getElementById("btnTotal").onclick = function(){
    let content = "";
    let even = "<div style = 'background-color: red; color: white; padding: 10px 0;'>" + "Thẻ chẵn" + "</div>";
    let odd = "<div style = 'background-color: blue; color: white; padding: 10px 0;'>" + "Thẻ lẻ" + "</div>";
    for(let i = 1; i <= 10; i++){
        if(i % 2 === 0){
            content += even;
        }else{
            content += odd;
        }
    }
    document.getElementById("notifiCation").innerHTML = content;
}