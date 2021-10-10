function User_Manager() {
    var array_Users = [];
    // adding attributes to an array and make it like an object
    array_Users.new_User_ID = new_User_ID;
    array_Users.add_User = add_User;
    // array_Users.update = update;
    array_Users.remove_User = remove_User;
    console.log("Creating a new array_Users (array of Users):\n", array_Users);
    return array_Users;
}

function new_User_ID(myUser) {
    if (this.length === 0) {
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
function add_User(myUser) {
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

// search the given user and remove it
function remove_User(myUser) {
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

    if (index >= 0) {
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
