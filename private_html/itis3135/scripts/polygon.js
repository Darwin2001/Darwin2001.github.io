function getNumber(){
    var validAnswer = false;

    while(!validAnswer){
        person = prompt("Please enter a number between 3-7 to get a shape");

        if(person >= 3 && person <= 7){
            validAnswer = true;
            return person;
        }
    }
}
function ConvertShape(person){

    if(person == 3){
        return "Triangle";
    }
    else if(person == 4){
        return "Square";
    }
    else if(person == 5){
        return "Pentagon";
    }
    else if(person == 6){
        return "Hexagon";
    }
    else if(person == 7){
        return "Septagon";
    }
}

function displaySides(){
    let number = getNumber();
    let shape = ConvertShape(number);

    alert("Number of sides = " + number +"\n" + "Shape: "+shape);
}
