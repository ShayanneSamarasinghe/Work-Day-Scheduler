
// time format from moment.js // 
var currentHour = moment().format ('H')
console.log (currentHour)


// Save Function //
function saveTask(i){
  localStorage.setItem(`saveInfo${i}`,document.getElementById(`description${i}`).value); 
  console.log(i)


}
   


// for loop to create timeblocks from 0900 to 1700 // 
for (var i=9; i<=17; i++){
  var textValue = localStorage.getItem(`saveInfo${i}`);
    document.querySelector (".container").innerHTML +=
     `<div class = "row" id = "row${i}">
        <textarea class = "hour, col-2" id = "time${i}">${moment(i.toString(),'LT').format ('H')}</textarea>
        <input class = "description, time-block, col-5" id ="description${i}" name = "saveInfo" value = "${textValue}"></input>
        <button class = " btn, btn-primary, saveBtn, ,saveBtn i:hover col-2" id = "saveBtn${i}" onclick = "saveTask(${i})">Save</button>
      </div>`

      var saveStuff = document.getElementById(`saveBtn${i}`);
      

     if(i>currentHour){
      document.getElementById(`description${i}`).className += " future";

     }else if (i == currentHour){
      document.getElementById(`description${i}`).className += " present";

     }else{
      document.getElementById(`description${i}`).className += " past";
     }



     

}


// creates variable with a function inside to put month, date, year and time in Jumbotron // 
var todayDate = function (){

  
document.querySelector("#currentDay").innerHTML = 
`${moment().format('MMMM Do YYYY, h:mm:ss a')}`; 

}

// allows time changes per second //
setInterval (todayDate, 1000);











 







