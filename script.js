let hr=0;
let min=0;
let sec=0;
let count=0;

var timer=false;

function start(){
timer=true
stopwatch();
document.body.style.backgroundColor="green"

}

function reset(){
timer=false;
 hr=0;
min=0;
sec=0;
count=0;

document.getElementById("count").innerHTML="00"
document.getElementById("sec").innerHTML="00"
document.getElementById("min").innerHTML="00"
document.getElementById("hr").innerHTML="00"

document.body.style.backgroundColor=" rgb(43,26,26)"

}

function stop(){
timer=false;
document.body.style.backgroundColor="brown"
}



function stopwatch(){
    if(timer==true){
        count=count+1;
        document.getElementById("count").innerHTML=count
    }
    if(count==100){
        sec=sec+1;
        count=0;
        document.getElementById("sec").innerHTML=sec;
    }

    if(sec==60){
        min=min+1;
        sec=0;
        document.getElementById("min").innerHTML=min
    }

    if(min==60){
        hr=hr+1;
        min=0;
        sec=0;
        document.getElementById("hr").innerHTML=hr
    }

    setTimeout("stopwatch()",10)// wait for 10 ms

}