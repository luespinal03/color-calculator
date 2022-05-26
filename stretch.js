const prompt = require('prompt-sync')({
    sigint: true
});


let userChoice1 = (prompt("Welcome to color calculator. In this program choose a single color to get deconsructed and two colors to get constructed into one color: "));

if (userChoice1 === "blue and red" || "red and blue") {
    console.log("purple") 
} else if (userChoice1 === "red and yellow" || "yellow and red"){
    console.log("orange")
} else if (userChoice1 === "yellow and blue" || "blue and yellow"){
    console.log("green")
} else {
    console.log("error")
}

// stretch goal // deconstruction 


if (userChoice1 === "purple") {
    console.log("blue and red")  
} else if (userChoice1 === "orange"){
    console.log("red and yellow")
} else if (userChoice1 === "green"){
    console.log("yellow and blue")
} else {
    console.log("error")
}
