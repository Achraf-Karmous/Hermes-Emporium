function Bill_Manager() {
    var array_Bills = [];
    // adding attributes to an array and make it like an object
    array_Bills.new_Bill_ID = new_Bill_ID;
    array_Bills.add_Bill = add_Bill;
    // array_Bills.update = update;
    array_Bills.remove_Bill = remove_Bill;
    console.log("Creating a new array_Bills (array of Bills):\n", array_Bills);
    return array_Bills;
}

function new_Bill_ID(myBill) {
    if (this.length === 0) {
        myBill.id = 1000; // id starts from 1; like in Unix-like system
        console.log(
            "A new bill with ID",
            myBill.id,
            "has been created:\n",
            myBill
        );
    } else {
        myBill.id = this[this.length - 1].id + 1;
    }
}

// add a new bill to the array_Bills
function add_Bill(myBill) {
    this.push(myBill);
    console.log(
        "The Bill ID",
        myBill.id,
        "has been added to the database:\n",
        this
    );
}

// useless function, because when I use the setter, the bill is updated automatically
// search for the bill and update it
// function update(myBill) {
//     var i = 0;
//     while (i < this.length) {
//         if (myBill.id === this[i].id) {
//             this[i] = myBill;
//             console.log(
//                 "Updating the bill with the ID " + myBill.id + " :\n",
//                 this[i]
//             );
//             break;
//         }
//         i++;
//     }
// }

// search the given bill and remove it
function remove_Bill(myBill) {
    var success = false;
    var index = reduce(
        this,
        function (index, element, i) {
            if (element.id === myBill.id) {
                console.log(
                    'Disabling the bill "' +
                        myBill.id +
                        '" (found inside the "array_Bills", at the of position:' +
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
        this[index].set({ legal: false, removed_At: new Date() });
        success = true;

        console.log(
            'Bill with ID "' +
                myBill.id +
                '" have been changed (bill.active: true -> false) inside "array_Bills[' +
                index +
                ']" :\n',
            this
        );
    } else {
        console.log(
            'Bill with ID "' +
                myBill.id +
                '" is not found inside "array_Bills" :\n',
            this
        );
        success = false;
    }
    return success;
}
