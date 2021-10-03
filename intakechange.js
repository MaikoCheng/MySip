let daytoday = new Date();
let currenttime = daytoday.getMinutes();
let currenthour = daytoday.getHours();
let currentsecond = daytoday.getSeconds();
let cupssipped = 8;
let goalamount = 8;

function change(){
    document.getElementById("changebut").style.display = "none";
    document.getElementById("submit").style.display = "flex";
    document.getElementById("changenumber").style.display = "flex";
}

function submit(){
    document.getElementById("changebut").style.display = "flex";
    document.getElementById("submit").style.display = "none";
    document.getElementById("changenumber").style.display = "none";
    goalamount = document.getElementById("changenumber").value;
    if (cupssipped <= goalamount/2){
        document.documentElement.style.setProperty("--color","#e95656")
        document.getElementById("navbar").style.color="white";
        document.body.style.backgroundColor="#ffdada";
        document.getElementById("intake").textContent = "LOW";
    }else if (cupssipped>goalamount/2 && cupssipped < (goalamount)){
        document.documentElement.style.setProperty("--color","#e8d900")
        document.getElementById("navbar").style.color="black";
        document.body.style.backgroundColor="#fffccc";
        document.getElementById("intake").textContent = "AVERAGE";
    }else{
        document.documentElement.style.setProperty("--color","green")
        document.getElementById("navbar").style.color="white";
        document.body.style.backgroundColor="#daffdc";
        document.getElementById("intake").textContent = "GOOD";
    }
    
}

if (currenthour == 0 && currentsecond == 0 && currenttime == 0){
    cupssipped = 0;
}
if (cupssipped <= goalamount/2){
    document.documentElement.style.setProperty("--color","#e95656")
    document.getElementById("navbar").style.color="white";
    document.body.style.backgroundColor="#ffdada";
    document.getElementById("intake").textContent = "LOW";
}else if (cupssipped>goalamount/2 && cupssipped < (goalamount)){
    document.documentElement.style.setProperty("--color","#e8d900")
    document.getElementById("navbar").style.color="black";
    document.body.style.backgroundColor="#fffccc";
    document.getElementById("intake").textContent = "AVERAGE";
}else{
    document.documentElement.style.setProperty("--color","green")
    document.getElementById("navbar").style.color="white";
    document.body.style.backgroundColor="#daffdc";
    document.getElementById("intake").textContent = "GOOD";
}

function checkpass(){
    if (document.getElementById("secretinput").value == "Mackenbach"){
        document.getElementById("secret").style.display = "none";
        document.getElementById("secretflip").style.display = "flex";
    }
}

function timertrigger(sec){
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

document.getElementById("cupcounter").textContent = cupssipped