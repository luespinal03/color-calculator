const prompt = require('prompt-sync')({sigint: true});



let one = "color combining";
let two = "color deconstruction";
let userChoice1 = (prompt("Welcome to color calculator. In this program 'one' means color combination and 'two' means color deconstruction, enter your choice: "));


// code for color combining

if (userChoice1 === "one"){
    let color1 = (prompt("Choose first basic color: "));
    let color2 = (prompt("Choose second basic color: "))

    if(color1 === "red" && color2 === "blue" || color1 === "blue" && color2 === "red"){
        console.log("purple");}

        else if(color1 === "red" && color2 === "yellow" || color1 === "yellow" && color2 === "red"){
        console.log("orange");}

        else if(color1 === "blue" && color2 === "yellow" || color1 === "yellow" && color2 === "blue"){
        console.log("green");}

        else{
            console.log("error");
        }
    }

// code for color deconstruction

if (userChoice1 === "two"){
let color3 = (prompt("Choose color you wish to deconstruct: "));

    if(color3 === "purple"){
        console.log("purple comes out of red + blue");}
        else if(color3 === "orange"){
            console.log("orange comes out of red + yellow");}
            else if(color3 === "green"){
                console.log("green comes out of blue + yellow");}
                else{
                    console.log("error");
            }
        }




        
    



