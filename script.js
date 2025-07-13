// let isHomework = 1

// if(isHomework == '1') {
//     console.log("Yaayyyy you got an ice cream.");
// }


// const man = "james"
// if(man!='john'){
//     console.log("man is not john")
// }
// else{
//     console.log("man is john")
// }

// let x = 7
// if(x<=5){
//     console.log("its less than 5");
    
// }
// else{
//     console.log("not less");
// }



// if (4>5){
//     console.log("Wohooooo");
// }
// else {
//     console.log("Oops");
    
// }





// let isRaining = false;


// if (isRaining == true) {
//     console.log("Take an umbrella");
// }
// else{
//     console.log("Take a sunglass");
// }


// const NigeriaPresident = "Tinubu";

// if(NigeriaPresident == NigeriaPresident){
//     console.log('Yes its tinubu');
    
// }
// else{
//     console.log("No he is not")
// }




// if condition:
//     Some code 
// else if condition:
//     some different
// else if condition:
//     some different
// else if condition:
//     some different
// else if condition:
//     some different
// else:   
//     Some other code



// let x = 17;
// let y = 16;

// if (x>y) {
//     console.log("X is greater than y")
// }
// else if(x == y){
//     console.log("Both are equal");
// }
// else{
//     console.log("Y is greater than X");
// }




// let myScore = prompt("What's your Score ? ");

// if(myScore >= 90) {
//     console.log("A");
// }
// else if(myScore >= 75) {
//     console.log("B");
// }
// else if(myScore >=60) {
//     console.log("C");
// }
// else{
//     console.log("Failed");
// }






// switch (expression) {
//     case value1:
//         // some code
//     case value2:
//         // some code
//     default:
//         // default block
// }




// let day = Number(prompt("Enter a number :"));

// switch (day) {
//     case 1:
//         alert("Monday")
//         break;
//     case 2:
//         alert("Tuesday")
//         break;
//     case 3:
//         alert("Wednesday")
//         break;
//     default:
//         alert("Invalid day")
// }

//To Change the content of a tag
let Today = 'Saturday'
let Tommorow ='Sunday'

if(Today != "Saturday",Tommorow != 'Sunday'){
    document.getElementById('prototype').textContent =  "Today is not Saturday and tommorow is not Sunday 🏢"
} 

else {
    document.getElementById('prototype').innerHTML ='Today is  Saturday and tomorrow is Sunday 💃'
}


//To control a Tag with click function

 

 function TranformEmoji(){
     if(document.getElementById("emoji").innerHTML== "📅"){
        document.getElementById('prototype').style.backgroundColor = 'cyan',
       document.querySelector('#emoji').innerHTML = '🏢'
     }
       else{
         document.querySelector('#prototype').style.backgroundColor = 'blue';
document.getElementById('prototype').style.color = 'white',
document.querySelector('#emoji').innerHTML = '📅'

      }
 }

 document.getElementById('emoji').addEventListener("click", TranformEmoji)



isRaining = true

if (isRaining == true) {
    document.getElementById('heading').innerHTML = "Take an Umbrella☂️"
}
else{
    document.getElementById('heading').innerHTML = "Take a Sunglass😎"
}


 document.getElementById('theme').addEventListener('click', changeTheme)


function changeTheme() {
     if (document.getElementById('theme').innerHTML == '🌙') {
        document.querySelector('.container').style.backgroundColor = 'black';
        document.querySelector('.container').style.color = 'white';
         document.getElementById('theme').innerHTML = "☀️"
    }
     else{
         document.querySelector('.container').style.backgroundColor = 'white';
         document.querySelector('.container').style.color = 'black';
         document.getElementById('theme').innerHTML = "🌙"
     }
    
    
}





// ARRAY
//Array is the list of item. the symbols is [],

// let x = [5,'milk', 'bread', true]
// //to add to x list without showing it on this page other than console, we can introduce 'x.push'to push to the last list. To remove from last we have "x.pop"
// //These are array FUNCTIONS

// x.push('orange','mango','apple'); //adding to last

// x.pop();// to remove from last
// x.shift();//Remove element from start
// x.unshift('cashew'); //Add Element from start
// x.splice(1,1); //To remove a particular item "bread"for example "2" is the index of bread.

// x.splice(1,0,'yellow', 10);//it can also replace them. for example let replace them with 'yellow' and '10'.



// console.log(x);

// console.log(x[0]);
// console.log(x[3]);

// let x = [5,'milk', 'bread', true]
// let sliced = x.slice(0,3);
// // let sliced = x.slice(2);
// console.log(sliced);

//where the 'spliced'is Applicable

//2 dimentional array
// let task = [];

// task.push([1,'Do Homework','09:00','10:00']);

// task.push([2,'send report to manager','10:00','10:30'],);
// console.log(task);


//LOOPS
//ST-Starting point  --> eg:i = 0
//EP-Ending Point --> can be anything depending on the list of the number, eg i < 10.
//Steps -->eg i++ or i = i + 1.

//FOR LOOP

// for(let i = 0; i < 10; i++){
//     // if(i == 5){
//     //     break
//     //  } // if i want break it before number 5 i will put this code before the console.log

//     console.log(i);

//     // if(i == 5){
//     //     break
//     // } //this is if i want to break the list
// }
// //note: i++ is thesame as i = i + 1

// for(let i = 30; i >= 20; i--){
//     console.log(i);
// }

// for (let i = 10; i = 20; i = i = + 2){
//     console.log();
    
// }

// Filter Words Starting with a Vowel

// Given a list of words, return only those that start with a vowel.

 

 

// let fruits = ['apple', 'banana', 'orange', 'grape']

// const newfruits.filter((e)=>{

// })

// # Output: ['apple', 'orange']



