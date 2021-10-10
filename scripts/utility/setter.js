// setter
function set(object_or_key, myValue) {
    var myObject = {};
    if (
        object_or_key !== null && // if object_or_key is not null
        !myValue && // and value is undefined or null
        !Array.isArray(object_or_key) && // and object_or_key is not an array
        typeof object_or_key === "object" // but an object instead
    ) {
        // something.set(object_or_key) // if object_or_key === { key1:value1, key2 : value2}
        // then myObject = object_or_key
        myObject = object_or_key;
    } else if (typeof object_or_key === "string" && myValue !== undefined) {
        // if object_or_key is a string (a key) and myValue is not undefined
        // Example:
        // something.set(object_or_key , myValue) // if object_or_key === "key1" && myValue === value_1
        // then myObject["key1"] = value_1;
        myObject[object_or_key] = myValue;
    }

    for (var key in myObject) {
        // if the given attribute already exists inside the object (this)
        if (Object.keys(this).includes(key)) {
            // then update the value
            this[key] = myObject[key];
            // inform that the operation is a Succes
            console.log(
                'Update Succeded: updating the attribute "' +
                    key +
                    '" with value of "' +
                    myObject[key] +
                    '".\nNew value of "this" object',
                this
            );
        } else {
            // inform that the operation is failed
            console.log(
                "Update Failed: there's no attribute\"" +
                    key +
                    '" inside "this" object',
                this
            );
        }
    }
}
