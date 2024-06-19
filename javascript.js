// document.getElementById("count-el").innerText = 5;
//initialize the count as 0
//listen for the click event on the button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count
let count = 0;
let CountEl = document.getElementById("count-el");
function increment(){

    count +=1;
    CountEl.innerText = count;
   
}

let SaveEl = document.getElementById("save-el");
function save(){
    let countStr = count + " - ";
    SaveEl.textContent += countStr;
    count = 0;
    CountEl.innerText = count;
};

function decrement(){
    count -=1;
    CountEl.innerText = count;

}


let username = "per"

let message  = "ypu have three notifications"

let messageToUser = message + " " +username ;
console.log(messageToUser);



// let lapsCompleted = 0;

// function incrementLaps(){
//     lapsCompleted += 1;
//     console.log(lapsCompleted)
// }


// console.log(lapsCompleted);