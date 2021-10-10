function Login_History_Manager() {
    var array_Logins_History = [];
    // adding attributes to an array and make it like an object
    array_Logins_History.new_Login_History_ID = new_Login_History_ID;
    array_Logins_History.add_Login_History = add_Login_History;
    // array_Logins_History.update = update;
    array_Logins_History.remove_Login_History = remove_Login_History;
    console.log(
        "Creating a new array_Logins_History (array of Logins History):\n",
        array_Logins_History
    );
    return array_Logins_History;
}

function new_Login_History_ID(myLogin_History) {
    if (this.length === 0) {
        myLogin_History.id = 1000; // id starts from 1; like in Unix-like system
        console.log(
            "A new login history with ID",
            myLogin_History.id,
            "has been created:\n",
            myLogin_History
        );
    } else {
        myLogin_History.id = this[this.length - 1].id + 1;
    }
}

// add a new user to the array_Logins_History
function add_Login_History(myLogin_History) {
    this.push(myLogin_History);
    console.log(
        "The user ID",
        myLogin_History.id,
        "has been added to the database:\n",
        this
    );
}

// useless function, because when I use the setter, the user is updated automatically
// search for the user and update it
// function update(myLogin_History) {
//     var i = 0;
//     while (i < this.length) {
//         if (myLogin_History.id === this[i].id) {
//             this[i] = myLogin_History;
//             console.log(
//                 "Updating the user with the ID " + myLogin_History.id + " :\n",
//                 this[i]
//             );
//             break;
//         }
//         i++;
//     }
// }

// search the given user and remove it
function remove_Login_History(myUser) {
    var success = false;
    var that = this;
    var index = reduce(
        that,
        function (index, element, i) {
            if (element.user_uid === myUser.uid) {
                console.log(
                    'Disconnecting the user "' +
                        myUser.uid +
                        '" (found inside the "array_Logins_History", at the of position:' +
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
            'login_History of the User UID "' +
                this[index].id +
                '" have been changed (login_History.active: true -> false) inside "array_Logins_History[' +
                index +
                ']" :\n',
            this
        );
    } else {
        console.log(
            'User with ID "' +
                myUser.uid +
                '" is not found inside "array_Logins_History" :\n',
            this
        );
        success = false;
    }
    return success;
}

// ---------- Testing these methods ---------------
