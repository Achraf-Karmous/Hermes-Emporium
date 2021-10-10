function Set_Of_Permissions_Manager() {
    var array_Sets_Of_Permissions = new Array();
    // adding attributes to an array and make it like an object
    array_Sets_Of_Permissions.newID = newID;
    array_Sets_Of_Permissions.add = add;
    // array_Sets_Of_Permissions.update = update;
    array_Sets_Of_Permissions.remove = remove;
    console.log(
        "Creating a new array_Sets_Of_Permissions (Sets of Persmissions):\n",
        array_Sets_Of_Permissions
    );
    return array_Sets_Of_Permissions;
}

function newID(mySet_Of_Permissions) {
    if (this.length === 0) {
        mySet_Of_Permissions.id = 1000; // id starts from 1; like in Unix-like system
        console.log(
            'A new ID "' +
                mySet_Of_Permissions.id +
                '" have been given to the set of permissions:\n',
            mySet_Of_Permissions
        );
    } else {
        mySet_Of_Permissions.id = this[this.length - 1].id + 1;
    }
}

// add a new set of permissions to the array_Sets_Of_Permissions
function add(mySet_Of_Permissions) {
    this.push(mySet_Of_Permissions);
    console.log(
        "The set of permissions with the ID",
        mySet_Of_Permissions.id,
        "has been added to the database:\n",
        this
    );
}

// useless function, because when I use the setter, the set of permissions is updated automatically
// search for the set of permissions and update it
// function update(mySet_Of_Permissions) {
//     var i = 0;
//     while (i < this.length) {
//         if (mySet_Of_Permissions.id === this[i].id) {
//             this[i] = mySet_Of_Permissions;
//             console.log(
//                 "Updating the set of permissions with the ID " + mySet_Of_Permissions.id + " :\n",
//                 this[i]
//             );
//             break;
//         }
//         i++;
//     }
// }

// search the given set of permissions and remove it
function remove(mySet_Of_Permissions) {
    var success = false;
    var index = reduce(
        this,
        function (index, element, i) {
            if (element.id === mySet_Of_Permissions.id) {
                console.log(
                    'Disabling the set of permissions "' +
                        mySet_Of_Permissions.id +
                        '" (found inside the "array_Sets_Of_Permissions", at the of position:' +
                        i +
                        ")"
                );
                return i; // index will be changed only once with this return
            }
            return index; // return the same value
        },
        -1 // means not found
    );
    if (index > 0) {
        this[index].set({ active: false, removed_At: new Date() });
        success = true;

        console.log(
            'Permission with ID "' +
                mySet_Of_Permissions.id +
                '" have been changed (mySet_Of_Permissions.active: true -> false) inside "array_Sets_Of_Permissions[' +
                index +
                ']" :\n',
            this
        );
    } else {
        console.log(
            'Permission with ID "' +
                mySet_Of_Permissions.id +
                '" is not found inside "array_Sets_Of_Permissions" :\n',
            this
        );
        success = false;
    }
    return success;
}
