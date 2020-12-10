//finding variables from dayjs API to give local time and date
 console.log(currentDay);
 console.log(dayjs().format());
//declaring a new variable with the local date variable from the API in a format (week day, month, date, year)
 currentDay = dayjs().format(`dddd, MMMM DD, YYYY`);
 console.log(currentDay);
//displaying the local date in the header
 document.getElementById("currentDay").innerHTML = currentDay
//isolating the current hour from the API variable and declaring that as a new variable
 console.log(dayjs().hour());
 currentHour = dayjs().hour();
 console.log(currentHour);


 var no9 = document.getElementById("9");
 var no10 = document.getElementById("10");
 var no11 = document.getElementById("11");
 var no12 = document.getElementById("12");
 var no13 = document.getElementById("13");
 var no14 = document.getElementById("14");
 var no15 = document.getElementById("15");
 var no16 = document.getElementById("16");
 var no17 = document.getElementById("17");

//Attempts to loopchanging colors for the time slots
 // var everyHour = parseInt($(this).attr("dataHour"))
 // console.log("everyHour", everyHour);
 // var hourNow = parseInt($(this).attr("data-hour"))
 // $(".hour").each(function(){
 //   if(hourNow <= currentHour){
 //     $(this).addClass("past")
 //   }else if(hourNow === currentHour){
 //     $(this).addClass("present")
 //   }
 // })

 //  var workHours = [no9, no10, no11, no12, no13, no14, no15, no16, no17]
 // workHours.forEach(colorHours);

 // function colorHours (){
 //   var t = [9,10,11,12,13,14,15,16,17]
 //   for (var i=0; i<t.length;i++){
 //     if(currentHour === t) {
 //       this.classList.add("present");
 //     }
 //     else if(currentHour <= t) {
 //       this.classList.add("past");
 //     }
 //     else {
 //       this.classList.add("future");
 //     }
 //   }
 // }

 //9am
 if(currentHour === 9) {
     no9.classList.add("present");
 }
   else if(currentHour >= 9) {
     no9.classList.add("past");
   }
   else{
     no9.classList.add("future");
   }
 //10am
 if(currentHour === 10) {
     no10.classList.add("present");
 }
   else if(currentHour >= 10) {
     no10.classList.add("past");
   }
   else{
     no10.classList.add("future");
   }

 //11am
 if(currentHour === 11) {
     no11.classList.add("present");
 }
   else if(currentHour >= 11) {
     no11.classList.add("past");
   }
   else{
     no11.classList.add("future");
   }

 //12pm
 if(currentHour === 12) {
     no12.classList.add("present");
 }
   else if(currentHour >= 12) {
     no12.classList.add("past");
   }
   else{
     no12.classList.add("future");
   }

 //1pm
 if(currentHour === 13) {
     no13.classList.add("present");
 }
   else if(currentHour >= 13) {
     no13.classList.add("past");
   }
   else{
     no13.classList.add("future");
   }

 //2pm
 if(currentHour === 14) {
     no14.classList.add("present");
 }
   else if(currentHour >= 14) {
     no14.classList.add("past");
   }
   else{
     no14.classList.add("future");
   }
 //3pm
 if(currentHour === 15) {
     no15.classList.add("present");
 }
   else if(currentHour >= 15) {
     no15.classList.add("past");
   }
   else{
     no15.classList.add("future");
   }
 //4pm
 if(currentHour === 16) {
     no16.classList.add("present");
 }
   else if(currentHour >= 16) {
     no16.classList.add("past");
   }
   else{
     no16.classList.add("future");
   }
 //5pm
 if(currentHour === 17) {
     no17.classList.add("present");
 }
   else if(currentHour >= 17) {
     no17.classList.add("past");
   }
   else{
     no17.classList.add("future");
   }


 //saving "events" or text added by user to local storage and having it stay displayed unless erased (even when refreshed)
 var text9 = document.getElementById("text9");
 var text10 = document.getElementById("text10");
 var text11 = document.getElementById("text11");
 var text12 = document.getElementById("text12");
 var text13 = document.getElementById("text13");
 var text14 = document.getElementById("text14");
 var text15 = document.getElementById("text15");
 var text16 = document.getElementById("text16");
 var text17 = document.getElementById("text17");
 
 
//attempt at using jquery for local storage
   // var textarea = $(textarea)
   // $("button").on("click", function() {
   //   localStorage.setItem("textarea", (textarea.val))
   // })
 
 //9am
 document.getElementById("btn9").addEventListener("click", function(){
   console.log(text9.value);
   alert(text9.value);
   localStorage.setItem("9am Task", text9.value);
 })  
 function displayTask9am(){
   var task9am = localStorage.getItem("9am Task");
   text9.value  = task9am
 }
 displayTask9am ()

 //10am
 document.getElementById("btn10").addEventListener("click", function(){
   console.log(text10.value);
   alert(text10.value);
   localStorage.setItem("10am Task", text10.value);
 })  
 function displayTask10am(){
   var task10am = localStorage.getItem("10am Task");
   text10.value  = task10am
 }
 displayTask10am ()

 //11am
 document.getElementById("btn11").addEventListener("click", function(){
   console.log(text11.value);
   alert(text11.value);
   localStorage.setItem("11am Task", text11.value);
 })  
 function displayTask11am(){
   var task11am = localStorage.getItem("11am Task");
   text11.value  = task11am
 }
 displayTask11am ()

 //12pm
 document.getElementById("btn12").addEventListener("click", function(){
   console.log(text12.value);
   alert(text12.value);
   localStorage.setItem("12pm Task", text12.value);
 })  
 function displayTask12pm(){
   var task12pm = localStorage.getItem("12pm Task");
   text12.value  = task12pm
 }
 displayTask12pm ()      

 //1pm
 document.getElementById("btn13").addEventListener("click", function(){
   console.log(text13.value);
   alert(text13.value);
   localStorage.setItem("1pm Task", text13.value);
 })  
 function displayTask1pm(){
   var task1pm = localStorage.getItem("1pm Task");
   text13.value  = task1pm
 }
 displayTask1pm ()

  //2pm
  document.getElementById("btn14").addEventListener("click", function(){
   console.log(text14.value);
   alert(text14.value);
   localStorage.setItem("2pm Task", text14.value);
 })  
 function displayTask2pm(){
   var task2pm = localStorage.getItem("2pm Task");
   text14.value  = task2pm
 }
 displayTask2pm ()
 
 //3pm
 document.getElementById("btn15").addEventListener("click", function(){
   console.log(text15.value);
   alert(text15.value);
   localStorage.setItem("3pm Task", text15.value);
 })  
 function displayTask3pm(){
   var task3pm = localStorage.getItem("3pm Task");
   text15.value  = task3pm
 }
 displayTask3pm ()

 //4pm
 document.getElementById("btn16").addEventListener("click", function(){
   console.log(text16.value);
   alert(text16.value);
   localStorage.setItem("4pm Task", text16.value);
 })  
 function displayTask4pm(){
   var task4pm = localStorage.getItem("4pm Task");
   text16.value  = task4pm
 }
 displayTask4pm ()

 //5pm
 document.getElementById("btn17").addEventListener("click", function(){
   console.log(text17.value);
   alert(text17.value);
   localStorage.setItem("5pm Task", text17.value);
 })  
 function displayTask5pm(){
   var task5pm = localStorage.getItem("5pm Task");
   text17.value  = task5pm
 }
 displayTask5pm ()      
