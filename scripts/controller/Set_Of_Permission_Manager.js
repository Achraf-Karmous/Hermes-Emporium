function Set_Of_Permissions_Manager() {
    var array_Sets_Of_Permissions = [];
    // adding attributes to an array and make it like an object
    array_Sets_Of_Permissions.newID = newID;
    array_Sets_Of_Permissions.add = add;
    // array_Sets_Of_Permissions.update = update;
    array_Sets_Of_Permissions.remove = remove;
    return array_Sets_Of_Permissions;
}

function newID(mySet_Of_Permission) {
    if (this.length === 0) {
        mySet_Of_Permission.id = 1000; // id starts from 1; like in Unix-like system
        console.log(
            "A new set of permissions with ID",
            mySet_Of_Permission.id,
            "has been created:\n",
            mySet_Of_Permission
        );
    } else {
        mySet_Of_Permission.id = this[this.length - 1].id + 1;
    }
}

// add a new set of permissions to the array_Sets_Of_Permissions
function add(mySet_Of_Permission) {
    this.push(mySet_Of_Permission);
    console.log(
        "The set of permissions ID",
        mySet_Of_Permission.id,
        "has been added to the database:\n",
        this
    );
}

// useless function, because when I use the setter, the set of permissions is updated automatically
// search for the set of permissions and update it
// function update(mySet_Of_Permission) {
//     var i = 0;
//     while (i < this.length) {
//         if (mySet_Of_Permission.id === this[i].id) {
//             this[i] = mySet_Of_Permission;
//             console.log(
//                 "Updating the set of permissions with the ID " + mySet_Of_Permission.id + " :\n",
//                 this[i]
//             );
//             break;
//         }
//         i++;
//     }
// }

// search the given set of permissions and remove it
function remove(mySet_Of_Permission) {
    var success = false;
    var index = reduce(
        this,
        function (index, element, i) {
            if (element.id === mySet_Of_Permission.id) {
                console.log(
                    'Disabling the set of permissions "' +
                        mySet_Of_Permission.id +
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
                mySet_Of_Permission.id +
                '" have been changed (mySet_Of_Permission.active: true -> false) inside "array_Sets_Of_Permissions[' +
                index +
                ']" :\n',
            this
        );
    } else {
        console.log(
            'Permission with ID "' +
                mySet_Of_Permission.id +
                '" is not found inside "array_Sets_Of_Permissions" :\n',
            this
        );
        success = false;
    }
    return success;
}
