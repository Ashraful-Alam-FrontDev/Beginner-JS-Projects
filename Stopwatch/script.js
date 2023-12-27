let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let resetBtn = document.getElementById('reset')

let minute = 0;
let second = 0;
let milisecond = 0;


startBtn.addEventListener('click', ()=>{
    timer = true;
    stopWatch();
})
stopBtn.addEventListener('click', ()=>{
    timer = false;
})
resetBtn.addEventListener('click', ()=>{
    timer = false;
    minute = 0;
    second = 0;
    milisecond = 0; 
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
    document.getElementById('milisec').innerHTML = "00"; 
})

function stopWatch(){
    if(timer){
        milisecond++;

        if(milisecond == 100){
            second++;
            milisecond = 0;
        }
        if(second==60){
            minute++;
            second =0;
        }
        let minString = minute;
        let secString = second;
        let milisecString = milisecond;
        if (minute < 10) { 
            minString = "0" + minString; 
        } 
    
        if (second < 10) { 
            secString = "0" + secString; 
        } 
    
        if (milisecond < 10) { 
            milisecString = "0" + milisecString; 
        } 
        document.getElementById('min').innerHTML = minString; 
        document.getElementById('sec').innerHTML = secString; 
        document.getElementById('milisec').innerHTML = milisecString; 
        setTimeout(stopWatch, 10); 
    }
    
}