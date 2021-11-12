function dnaStrand(str) {

    const basePairs = ['A', 'C', 'T', 'G'];     //define the base pairs. The first half tanslates to the second half and vice versa
    return str.split('')                        //split the original string into an array
                .map(elem=>basePairs[           //map the array into a new array. For each element, return the base pair...
                    (basePairs.indexOf(elem)    //...at the index of the current element...
                    +(basePairs.length/2))      //...shifted to the right a number of elements equal to half the basePairs array length...
                    %basePairs.length])         //...and use the modulo operator (%) in case the shift pushed the value beyond the base pairs array length.
                .join('');                      //Join the new array back into a string, then return it.

}

function isValid(str) {

    // A str is valid if it returns to its original form 
    // after passing thought the function twice
    return str === dnaStrand(dnaStrand(str));

}

function log(str) {

    if (isValid(str)) {
        console.log(dnaStrand(str))
    } else {
        console.log(`${str} is not a valid strand of DNA`);
    }
}

log("ATTGC");       //--> "TAACG"
log("GTAT");        //--> "CATA"
log("aattaacggca"); //invalid, lower case
log("rrrrrrrr");    //invalid, lower case
log("ATRC");        //invalid, R not in the array