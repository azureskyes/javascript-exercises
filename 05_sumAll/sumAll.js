const sumAll = function(a, b) {
    if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
        return "ERROR";
    }
    if (a < 0 || b < 0) {
        return "ERROR";
    }

    let summedAll = 0;
    if (a <= b) {
        for (let i = a; i <= b; i++) {
            summedAll += i;
        }
    } else {
        for (let i = b; i <= a; i++) {
            summedAll += i;
        }
    }
    return summedAll;
};


// Do not edit below this line
module.exports = sumAll;

/* 
add all numbers between two numbers including
both extremes:
create function param (a, b);
loop & add;
return value. */