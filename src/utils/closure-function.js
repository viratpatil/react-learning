function multiplier (factor) {
    
    var x = 10; 
    return function (value) {
        return factor * value * x;
    }

    if (true) {
        var x = 2;
        console.log(x);
    }

    console.log(x);
}

var doubler = multiplier(2);
doubler(3);
doubler(4);
doubler(6);

var tripler = multiplier(3);


var x = 2 