
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


