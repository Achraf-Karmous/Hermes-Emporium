function Set_OfPermissions_Manager() {
    var array_Sets_OfPermissions = [];
    // adding attributes to an array and make it like an object
    array_Sets_OfPermissions.newID = newID;
    array_Sets_OfPermissions.add = add;
    // array_Sets_OfPermissions.update = update;
    array_Sets_OfPermissions.remove = remove;
    return array_Sets_OfPermissions;
}

function newID(mySet_OfPermission) {
    if (this.length - 1) {
        console.log(mySet_OfPermission);
        mySet_OfPermission.id = 1000; // id starts from 1; like in Unix-like system
        console.log(
            "A new Permission with ID",
            mySet_OfPermission.id,
            "has been created:\n",
            mySet_OfPermission
        );
    } else {
        mySet_OfPermission.id = this[this.length - 1].id + 1;
    }
}

// add a new permission to the array_Sets_OfPermissions
function add(mySet_OfPermission) {
    this.push(mySet_OfPermission);
    console.log(
        "The permission ID",
        mySet_OfPermission.id,
        "has been added to the database:\n",
        this
    );
}

// useless function, because when I use the setter, the permission is updated automatically
// search for the permission and update it
// function update(mySet_OfPermission) {
//     var i = 0;
//     while (i < this.length) {
//         if (mySet_OfPermission.id === this[i].id) {
//             this[i] = mySet_OfPermission;
//             console.log(
//                 "Updating the permission with the ID " + mySet_OfPermission.id + " :\n",
//                 this[i]
//             );
//             break;
//         }
//         i++;
//     }
// }

function remove(mySet_OfPermission) {
    var success = false;
    var index = reduce(
        this,
        function (index, element, i) {
            if (element.id === mySet_OfPermission.id) {
                console.log(
                    'Disabling the permission "' +
                        mySet_OfPermission.id +
                        '" (found inside the "array_Sets_OfPermissions", at the of position:' +
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
                mySet_OfPermission.id +
                '" have been changed (permission.active: true -> false) inside "array_Sets_OfPermissions[' +
                index +
                ']" :\n',
            this
        );
    } else {
        console.log(
            'Permission with ID "' +
                mySet_OfPermission.id +
                '" is not found inside "array_Sets_OfPermissions" :\n',
            this
        );
        success = false;
    }
    return success;
}

// search the given permission and remove it

var array_Sets_OfPermissions = Set_OfPermissions_Manager();
var achraf = Permission();
array_Sets_OfPermissions.newID(achraf);
array_Sets_OfPermissions.add(achraf);
achraf.set("login", "achraf");
achraf.set("full_Name", "Mohamed Achraf Karmous");

var mohsen = Permission();
array_Sets_OfPermissions.newID(mohsen);
array_Sets_OfPermissions.add(mohsen);
mohsen.set("login", "mohsen");
mohsen.set("full_Name", "Mohsen Tounsi");
console.log(array_Sets_OfPermissions);

var mohsen2 = Permission();
array_Sets_OfPermissions.remove(mohsen);
