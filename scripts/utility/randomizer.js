// this function will generate a number that is inside this range[start, end]
function generate_random_number_between(start, end) {
    if (start < end)
        return Math.floor(Math.random() * (end - start + 1) + start);
    return Math.floor(Math.random() * (start - end + 1) + end);
}

// this function will generate a new string with a random length between 8 and 16
function generate_random_string(start, end) {
    var random_string = "";
    // if start is not defined
    if (!start) {
        // then default value = 8
        minimum_length = 8;
    } else {
        minimum_length = start;
    }

    // if start is not defined
    if (!end) {
        // then default value = 16
        maximum_length = 16;
    } else {
        maximum_length = end;
    }

    var string_length = generate_random_number_between(
        minimum_length,
        maximum_length
    );
    var category_char;
    for (var i = 0; i < string_length; i++) {
        // choose generation between
        // 0 : numerical character
        // 1 : Alphabetical character (UpperCase)
        // 2 : _ (underscore)
        // 3 : Alphabetical character (LowerCase)
        category_char = generate_random_number_between(0, 4);
        if (category_char === 0) {
            // generate a random ascii number matching with number code
            number_ascii = generate_random_number_between(48, 57);
            random_string += String.fromCharCode(number_ascii);
            //
            // converting an ascii number code into a character with:
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
            //
        } else if (category_char === 1) {
            // generate a random ascii number matching with letter UpperCase
            letter_UpperCase_ascii = generate_random_number_between(65, 90);
            random_string += String.fromCharCode(letter_UpperCase_ascii);
        } else if (category_char === 1) {
            random_string += "_";
        } else {
            // generate a random ascii number matching with letter LowerCase
            letter_LowerCase_ascii = generate_random_number_between(97, 122);
            random_string += String.fromCharCode(letter_LowerCase_ascii);
        }
    }
    return random_string;
}
