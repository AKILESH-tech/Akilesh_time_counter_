let display = document.querySelector("#tick");
let Start = document.querySelector("#srt");
let Pause = document.querySelector("#pas");
let Reset = document.querySelector("#rst");

let starttime = 0;
let elapsetime = 0;
let hr = 0;
let sec = 0;
let intervalid 
let  min = 0 ;
let pause = true;

Start.addEventListener("click" , () => {
     if(pause){
        pause = false;
        starttime = Date.now() - elapsetime;
        intervalid = setInterval(updatetime , 1000);
     }
});

Pause.addEventListener("click", ()=>{
    if(!pause){
        pause = true;
        elapsetime = Date.now() - starttime;
        clearInterval(intervalid);
    }
});
Reset.addEventListener("click" , () =>{
    starttime = 0;
 elapsetime = 0;
 hr = 0;
  min = 0 ;
 sec = 0;
 pause = true;
clearInterval(intervalid);
display.textContent = "00:00:00"
});
function updatetime() {
     elapsetime = Date.now() - starttime;
     
     sec = Math.floor((elapsetime/1000)%60);
     min = Math.floor((elapsetime/(1000 * 60))%60);
     hr = Math.floor((elapsetime/(1000 * 60 * 60))%60);
      sec=String(sec);
      min=String(min);
      hr=String(hr);
    sec = settimer(sec);
    min = settimer(min);
    hr =  settimer(hr);

     display.textContent = `${hr}:${min}:${sec}`;

};

function settime(setter){
 return (("0") + setter).length > 2 ?  setter : "0" + setter ;
};

function settimer(unit){
    if(unit.length < 2){
     return  ("0" + unit);
    }
    else
    return unit;
}