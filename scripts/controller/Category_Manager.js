function Category_Manager() {
    var array_Categories = [];
    // adding attributes to an array and make it like an object
    array_Categories.new_Category_ID = new_Category_ID;
    array_Categories.add_Category = add_Category;
    // array_Categories.update = update;
    array_Categories.remove_Category = remove_Category;
    console.log(
        "Creating a new array_Categories (array of categories):\n",
        array_Categories
    );
    return array_Categories;
}

function new_Category_ID(myCategory) {
    if (this.length === 0) {
        myCategory.id = 1000; // id starts from 1; like in Unix-like system
        console.log(
            "A new category with ID",
            myCategory.id,
            "has been created:\n",
            myCategory
        );
    } else {
        myCategory.id = this[this.length - 1].id + 1;
    }
}

// add a new category to the array_Categories
function add_Category(myCategory) {
    this.push(myCategory);
    console.log(
        "The Category ID",
        myCategory.id,
        "has been added to the database:\n",
        this
    );
}

// useless function, because when I use the setter, the category is updated automatically
// search for the category and update it
// function update(myCategory) {
//     var i = 0;
//     while (i < this.length) {
//         if (myCategory.id === this[i].id) {
//             this[i] = myCategory;
//             console.log(
//                 "Updating the category with the ID " + myCategory.id + " :\n",
//                 this[i]
//             );
//             break;
//         }
//         i++;
//     }
// }

// search the given category and remove it
function remove_Category(myCategory) {
    var success = false;
    var index = reduce(
        this,
        function (index, element, i) {
            if (element.id === myCategory.id) {
                console.log(
                    'Disabling the category "' +
                        myCategory.id +
                        '" (found inside the "array_Categories", at the of position:' +
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
            'Category with ID "' +
                myCategory.id +
                '" have been changed (category.legal: true -> false) inside "array_Categories[' +
                index +
                ']" :\n',
            this
        );
    } else {
        console.log(
            'Category with ID "' +
                myCategory.id +
                '" is not found inside "array_Categories" :\n',
            this
        );
        success = false;
    }
    return success;
}
