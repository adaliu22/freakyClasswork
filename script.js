document.getElementById("count-el").innerText = 0;
let previousEntries = "";

let count =0;

function increment(){
    count++;
    document.getElementById("count-el").innerText = count;
}

function save(){
    previousEntries += count + " - ";
    
    document.getElementById("previous-entries").innerText = "Previous entries: " + previousEntries;
    
  
    count = 0;
    document.getElementById("count-el").innerText = count;
}
//title of the project is Build a Counter App
//it starts the counter at 5
//a div for the contents to act as a wrapper for the content
//two buttons with tags that I assume will be used to future functionality
//container to style the contents inside it 
