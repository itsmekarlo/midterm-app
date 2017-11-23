var cap = new Audio("http://media-ice.musicradio.com/CapitalNottinghamshireMP3");
		cap.loop = true;

var hea = new Audio("http://media-ice.musicradio.com/HeartUKMP3");

		hea.loop = true;

var lin = new Audio("http://lincs.planetwideradio.com:8000/lincsfm");
		lin.loop = true;

var rad = new Audio("http://icy-e-03-boh.sharp-stream.com/desiradio.mp3");
		rad.loop = true;

var ker = new Audio("http://icy-e-bl-03-gos.sharp-stream.com/kerrang.mp3");
		rad.loop = true;

var h2 = document.getElementById('clock');
 
// display current time by the second
var currentTime = setInterval(function(){
	var date = new Date();
	
	//var hours = (24 - (date.getHours()));
  var hours = date.getHours();
	
	var minutes = date.getMinutes();
	
	
	/*var ampm = (date.getHours()) < 24 ? 'AM' : 'PM';*/


	//convert military time to standard time

	if (hours < 0) {
		hours = hours * -1;
	} else if (hours == 00) {
		hours = 00;
	} else {
		hours = hours;
	}


	h2.textContent = addZero(hours) + ":" + addZero(minutes);
	
},1000);


/*functions to get hour, min, secs, 
  am or pm, add zero, set alarm time and sound, clear alarm
*/

function addZero(time) {

		return (time < 10) ? "0" + time : time;
	
}

function hoursMenu(){

	var select = document.getElementById('alarmhrs');
	var hrs = 23

	for (i=0; i <= hrs; i++) {
		select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);
		
	}
}
hoursMenu();

function minMenu(){

	var select = document.getElementById('alarmmins');
	var min = 59;

	for (i=0; i <= min; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
minMenu();

/*function secMenu(){

	var select = document.getElementById('alarmsecs');
	var sec = 59;

	for (i=0; i <= sec; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
secMenu();

*/
function alarmSet() {

	var hr = document.getElementById('alarmhrs');
	
	var min = document.getElementById('alarmmins');
	
/*	var sec = document.getElementById('alarmsecs'); */
	
	/*var ap = document.getElementById('ampm');
    */

    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
   /* var selectedSec = sec.options[sec.selectedIndex].value;*/
  /*  var selectedAP = ap.options[ap.selectedIndex].value;*/

    var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin);
    console.log('alarmTime:' + alarmTime);

    document.getElementById('alarmhrs').disabled = true;
	document.getElementById('alarmmins').disabled = true;
	/*document.getElementById('alarmsecs').disabled = true;*/
/*	document.getElementById('ampm').disabled = true; */
cap.pause();
  hea.pause();
  lin.pause();
  rad.pause();
  ker.pause();
  
  if(document.getElementById("radio").value =="stop") {
    document.getElementById("radio").style.borderColor="red";
    document.getElementById("def").innerHTML="PLEASE SELECT";
    document.getElementById("def").style.color="red";
  } 
  
  if(document.getElementById("radio").value =="capi") {
    document.getElementById("radio").style.borderColor="white";
    document.getElementById("def").innerHTML="Select Station";
    document.getElementById("def").style.color="";
     document.getElementById('radio').disabled = true;
  } 
  
   if(document.getElementById("radio").value =="heart") {
    document.getElementById("radio").style.borderColor="white";
    document.getElementById("def").innerHTML="Select Station";
    document.getElementById("def").style.color="";
     document.getElementById('radio').disabled = true;
  } 
  
   if(document.getElementById("radio").value =="lincs") {
    document.getElementById("radio").style.borderColor="white";
    document.getElementById("def").innerHTML="Select Station";
    document.getElementById("def").style.color="";
     document.getElementById('radio').disabled = true;
  } 
  
   if(document.getElementById("radio").value =="radi") {
    document.getElementById("radio").style.borderColor="white";
    document.getElementById("def").innerHTML="Select Station";
    document.getElementById("def").style.color="";
     document.getElementById('radio').disabled = true;
  } 
  
   if(document.getElementById("radio").value =="kera") {
    document.getElementById("radio").style.borderColor="white";
    document.getElementById("def").innerHTML="Select Station";
    document.getElementById("def").style.color="";
     document.getElementById('radio').disabled = true;
  } 

//when alarmtime is equal to currenttime then play a sound
	var h2 = document.getElementById('clock');

/*function to calcutate the current time 
then compare it to the alarmtime and play a sound when they are equal
*/

setInterval(function(){

	var date = new Date();
	
	//var hours = (24 - (date.getHours()));
	 var hours = date.getHours();
	
	var minutes = date.getMinutes();
	
	/*var seconds = date.getSeconds();*/
	
	/*var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';*/


	//convert military time to standard time

	if (hours < 0) {
		hours = hours * -1;
	} else if (hours == 00) {
		hours = 12;
	} else {
		hours = hours;
	}
	
	var currentTime = h2.textContent = addZero(hours) + ":" + addZero(minutes);
	

	if (alarmTime == currentTime) {
    if(document.getElementById("radio").value=="heart") {
      hea.play();
		}
    if(document.getElementById("radio").value=="capi") {
      cap.play();
		}
     if(document.getElementById("radio").value=="lincs") {
      lin.play();
		
     }
    if(document.getElementById("radio").value=="radi") {
      rad.play();
		}
    
    if(document.getElementById("radio").value=="kera") {
 
      ker.play();
		}
  }
},1000);

	// console.log('currentTime:' + currentTime);	

}

document.getElementById('radio').onblur = function() {
   if(document.getElementById("radio").value=="heart") {
      document.getElementById("radio").style.borderColor="white";
    document.getElementById("def").innerHTML="Select Station";
    document.getElementById("def").style.color="";
  cap.pause();
  hea.pause();
  lin.pause();
  rad.pause();
  ker.pause();
  hea.play();
		}
    if(document.getElementById("radio").value=="capi") {
       document.getElementById("radio").style.borderColor="white";
    document.getElementById("def").innerHTML="Select Station";
    document.getElementById("def").style.color="";
      	cap.pause();
  hea.pause();
  lin.pause();
  rad.pause();
      ker.pause();
      cap.play();
		}
     if(document.getElementById("radio").value=="lincs") {
       document.getElementById("radio").style.borderColor="white";
    document.getElementById("def").innerHTML="Select Station";
    document.getElementById("def").style.color=""; 
       	cap.pause();
  hea.pause();
  lin.pause();
  rad.pause();
       ker.pause();
      lin.play();
		
     }
    if(document.getElementById("radio").value=="radi") {
       document.getElementById("radio").style.borderColor="white";
    document.getElementById("def").innerHTML="Select Station";
    document.getElementById("def").style.color="";
      	cap.pause();
  hea.pause();
  lin.pause();
  rad.pause();
      ker.pause();
      rad.play();
		}
  
  if(document.getElementById("radio").value=="kera") {
    
     document.getElementById("radio").style.borderColor="white";
    document.getElementById("def").innerHTML="Select Station";
    document.getElementById("def").style.color="";
  cap.pause();
  hea.pause();
  lin.pause();
  rad.pause();
  ker.play();

		}
  
  if(document.getElementById("radio").value=="stop") {
       document.getElementById("radio").style.borderColor="white";
    document.getElementById("def").innerHTML="Select Station";
    document.getElementById("def").style.color="";
  cap.pause();
  hea.pause();
  lin.pause();
  rad.pause();
  ker.pause();
  
		}
}


            
function alarmClear() {
document.getElementById("radio").value="stop";
  document.getElementById('alarmhrs').disabled = false;
	document.getElementById('alarmmins').disabled = false;
  
document.getElementById('radio').disabled = false;
  
 /*document.getElementById('alarmsecs').disabled = false;*/
/*	document.getElementById('ampm').disabled = false */
	cap.pause();
  hea.pause();
  lin.pause();
  rad.pause();
  ker.pause();
}