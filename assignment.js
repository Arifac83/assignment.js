// problem-1 start

function feetToMile(feet){
    if(feet <0){
        return " Distence cannot be negative.So don't show result of ... ";
    }
    else{        
        var mile = feet/5280;          
        return mile;
    }
}
var result = feetToMile(5280);
console.log(" This is  feet input value , which is Convert to mile and result is: ",result,"mile.");

// problem-1 end

// problem-2 start

function woodCalculator(chair, table, bed) {
    var numbers = chair * 1;
    var chairCount = Math.abs(numbers);
    var numbers = table * 3;
    var tableCount = Math.abs(numbers);
    var numbers = bed * 5;
    var bedCount = Math.abs(numbers);
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}

var woodCalculate = woodCalculator(4, 3, 2);
console.log("This is totalwood and  the result of woodCalculator is:",woodCalculate);

// problem-2 end

// problem-3-start

function brickCalculator(countFloors) {

    var bricks = 1000;
    var firstTenFloors = 10 * 15 * bricks;
    var secondTenFloors = 10 * 12 * bricks;

    if (countFloors >= 1 && countFloors <= 10) {
        return countFloors * 15 * bricks;
    }
    else if (countFloors >= 11 && countFloors <= 20) {
        var calc = countFloors - 10;
        var result = calc * 12 * bricks;
        var total = result + firstTenFloors;
        return total;
    }
    else if (countFloors > 20) {
        var calc = countFloors - 20;
        var result = calc * 10 * bricks;
        var total = result + firstTenFloors + secondTenFloors;
        return total;
    }
    else{
        return "Please Enter The Positive Number. ";
    }
}
var bricksCalculate = brickCalculator(30);
console.log(bricksCalculate);

// problem-3 end

// problem-4-start

function tinyFriend(names) {
    var smallest = names[0];
    for (var i = 1; i< names.length; i++) {
        var currentElement = names[i];
        if (currentElement.length < smallest.length) {
            smallest = currentElement;
        }
    }
    return smallest;
}
var friendsName = tinyFriend(["arif","arham","maria","kawser","topn","choudhury","rima","juma","joy","roy"]);
console.log("this is smallest name friends  is:", friendsName);

// problem-4 end