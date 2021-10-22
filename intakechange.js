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
        document.getElementById("waterbg").style.backgroundImage = "linear-gradient(60deg, #ffdada 0%, #ff5f5f 100%)";
        document.getElementById("navbar").style.color="white";
        document.getElementById("a").style.color = "white";
        document.getElementById("intake").textContent = "LOW";
        document.getElementById("main").style.color = "white";
        document.getElementById("changeamount").style.backgroundColor = "#ffdada"
    }else if (cupssipped>goalamount/2 && cupssipped < (goalamount)){
        document.documentElement.style.setProperty("--color","#e8d900")
        document.getElementById("waterbg").style.backgroundImage = "linear-gradient(60deg, #fffccc 0%, #fff458 100%)";
        document.getElementById("navbar").style.color="black";
        document.getElementById("intake").textContent = "AVERAGE";
        document.getElementById("main").style.color = "black";
        document.getElementById("a").style.color = "black";
        document.getElementById("changeamount").style.backgroundColor = "#fffccc"
    }else{
        document.documentElement.style.setProperty("--color","green")
        document.getElementById("navbar").style.color="white";
        document.getElementById("intake").textContent = "GOOD";
        document.getElementById("a").style.color = "white";
        document.getElementById("main").style.color = "white";
        document.getElementById("waterbg").style.backgroundImage = "linear-gradient(60deg, #daffdc 0%, #53ff5b 100%)";
        document.getElementById("changeamount").style.backgroundColor = "#daffdc"
    }
    
}

if (currenthour == 0 && currentsecond == 0 && currenttime == 0){
    cupssipped = 0;
}
if (cupssipped <= goalamount/2){
    document.documentElement.style.setProperty("--color","#e95656")
    document.getElementById("waterbg").style.backgroundImage = "linear-gradient(60deg, #ffdada 0%, #ff5f5f 100%)";
    document.getElementById("navbar").style.color="white";
    document.getElementById("a").style.color = "white";
    document.getElementById("intake").textContent = "LOW";
    document.getElementById("main").style.color = "white";
    document.getElementById("changeamount").style.backgroundColor = "#ffdada"
}else if (cupssipped>goalamount/2 && cupssipped < (goalamount)){
    document.documentElement.style.setProperty("--color","#e8d900")
    document.getElementById("waterbg").style.backgroundImage = "linear-gradient(60deg, #fffccc 0%, #fff458 100%)";
    document.getElementById("navbar").style.color="black";
    document.getElementById("intake").textContent = "AVERAGE";
    document.getElementById("main").style.color = "black";
    document.getElementById("a").style.color = "black";
    document.getElementById("changeamount").style.backgroundColor = "#fffccc"
}else{
    document.documentElement.style.setProperty("--color","green")
    document.getElementById("navbar").style.color="white";
    document.getElementById("intake").textContent = "GOOD";
    document.getElementById("a").style.color = "white";
    document.getElementById("main").style.color = "white";
    document.getElementById("waterbg").style.backgroundImage = "linear-gradient(60deg, #daffdc 0%, #53ff5b 100%)";
    document.getElementById("changeamount").style.backgroundColor = "#daffdc"
}

function checkpass(){
    if (document.getElementById("secretinput").value == "Mackenbach"){
        document.getElementById("secret").style.display = "none";
        document.getElementById("secretflip").style.display = "flex";
    }
}

function timertrigger(sec){
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML=sec;
        document.getElementById("timerstart").style.visibility = "hidden";
        document.getElementById("timerstart2").style.visibility = "hidden";
        document.getElementById("timerstart3").style.visibility = "hidden";
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            document.getElementById("timerstart").style.visibility = "visible";
        document.getElementById("timerstart2").style.visibility = "visible";
        document.getElementById("timerstart3").style.visibility = "visible";
        }
    }, 1000);
}

document.getElementById("cupcounter").textContent = cupssipped