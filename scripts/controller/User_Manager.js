function User_Manager() {
    var array_Users = [];
    // adding attributes to an array and make it like an object
    array_Users.newUID = newUID;
    array_Users.add = add;
    // array_Users.update = update;
    array_Users.remove = remove;
    return array_Users;
}

function newUID(myUser) {
    if (this.length - 1) {
        console.log(myUser);
        myUser.uid = 1000; // uid starts from 1; like in Unix-like system
        console.log(
            "A new User with UID",
            myUser.uid,
            "has been created:\n",
            myUser
        );
    } else {
        myUser.uid = this[this.length - 1].uid + 1;
    }
}

// add a new user to the array_Users
function add(myUser) {
    this.push(myUser);
    console.log(
        "The user UID",
        myUser.uid,
        "has been added to the database:\n",
        this
    );
}

// useless function, because when I use the setter, the user is updated automatically
// search for the user and update it
// function update(myUser) {
//     var i = 0;
//     while (i < this.length) {
//         if (myUser.uid === this[i].uid) {
//             this[i] = myUser;
//             console.log(
//                 "Updating the user with the UID " + myUser.uid + " :\n",
//                 this[i]
//             );
//             break;
//         }
//         i++;
//     }
// }

function remove(myUser) {
    var success = false;
    var index = reduce(
        this,
        function (index, element, i) {
            if (element.uid === myUser.uid) {
                console.log(
                    'Disabling the user "' +
                        myUser.uid +
                        '" (found inside the "array_Users", at the of position:' +
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
            'User with UID "' +
                myUser.uid +
                '" have been changed (user.active: true -> false) inside "array_Users[' +
                index +
                ']" :\n',
            this
        );
    } else {
        console.log(
            'User with UID "' +
                myUser.uid +
                '" is not found inside "array_Users" :\n',
            this
        );
        success = false;
    }
    return success;
}

// search the given user and remove it

var array_Users = User_Manager();
var achraf = User();
array_Users.newUID(achraf);
array_Users.add(achraf);
achraf.set("login", "achraf");
achraf.set("full_Name", "Mohamed Achraf Karmous");

var mohsen = User();
array_Users.newUID(mohsen);
array_Users.add(mohsen);
mohsen.set("login", "mohsen");
mohsen.set("full_Name", "Mohsen Tounsi");
console.log(array_Users);

var mohsen2 = User();
array_Users.remove(mohsen);
