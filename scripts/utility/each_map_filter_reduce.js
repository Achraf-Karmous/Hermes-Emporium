function each(myCollection, myFunction) {
    if (Array.isArray(myCollection)) {
        for (var i = 0; i < myCollection.length; i++) {
            myFunction(myCollection[i], i);
        }
    } else {
        for (var key in myCollection) {
            myFunction(myCollection[key], key);
        }
    }
}

function map(myCollection, myFunction) {
    var newAccumulator = [];
    if (!Array.isArray(myCollection)) {
        newAccumulator = {};
    }
    each(myCollection, function (element, key) {
        newAccumulator[key] = myFunction(element, key);
    });
    return newAccumulator;
}

function filter(myArray, myPredicate) {
    var newAccumulator = [];
    each(myArray, function (element) {
        if (myPredicate(element)) {
            newAccumulator.push(element);
        }
    });
    return newAccumulator;
}

function reduce(myArray, myFunction, myAccumulator) {
    if (myAccumulator === undefined) {
        myAccumulator = myArray[0];
        myArray = myArray.slice(1);
    }
    each(myArray, function (element, i) {
        myAccumulator = myFunction(myAccumulator, element, i);
    });
    return myAccumulator;
}
