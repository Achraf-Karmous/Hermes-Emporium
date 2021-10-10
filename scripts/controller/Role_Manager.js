function Role_Manager() {
    var array_Roles = new Array();
    // adding attributes to an array and make it like an object
    array_Roles.new_Role_ID = new_Role_ID;
    array_Roles.add_Role = add_Role;
    // array_Roles.update = update;
    array_Roles.remove_Role = remove_Role;
    console.log("Creating a new array_Roles (array of Roles):\n", array_Roles);
    return array_Roles;
}

function new_Role_ID(myRole) {
    if (this.length === 0) {
        myRole.id = 1000; // id starts from 1; like in Unix-like system
        console.log(
            'A new ID "' + myRole.id + '" have been given to the role:\n',
            myRole
        );
    } else {
        myRole.id = this[this.length - 1].id + 1;
    }
}

// add a new role to the array_Roles
function add_Role(myRole) {
    this.push(myRole);
    console.log(
        "The role with the ID",
        myRole.id,
        "has been added to the database:\n",
        this
    );
}

// useless function, because when I use the setter, the role is updated automatically
// search for the role and update it
// function update(myRole) {
//     var i = 0;
//     while (i < this.length) {
//         if (myRole.id === this[i].id) {
//             this[i] = myRole;
//             console.log(
//                 "Updating the role with the ID " + myRole.id + " :\n",
//                 this[i]
//             );
//             break;
//         }
//         i++;
//     }
// }

// search the given role and remove it
function remove_Role(myRole) {
    var success = false;
    var index = reduce(
        this,
        function (index, element, i) {
            if (element.id === myRole.id) {
                console.log(
                    'Disabling the role "' +
                        myRole.id +
                        '" (found inside the "array_Roles", at the of position:' +
                        i +
                        ")"
                );
                return i; // index will be changed only once with this return
            }
            return index; // return the same value
        },
        -1 // means not found
    );

    if (index >= 0) {
        this[index].set({ active: false, removed_At: new Date() });
        success = true;

        console.log(
            'Permission with ID "' +
                myRole.id +
                '" have been changed (myRole.active: true -> false) inside "array_Roles[' +
                index +
                ']" :\n',
            this
        );
    } else {
        console.log(
            'Permission with ID "' +
                myRole.id +
                '" is not found inside "array_Roles" :\n',
            this
        );
        success = false;
    }
    return success;
}
