function Product_Manager() {
    var array_Products = [];
    // adding attributes to an array and make it like an object
    array_Products.new_Product_ID = new_Product_ID;
    array_Products.add_Product = add_Product;
    // array_Products.update = update;
    array_Products.remove_Product = remove_Product;
    console.log(
        "Creating a new array_Products (array of Products):\n",
        array_Products
    );
    return array_Products;
}

function new_Product_ID(myProduct) {
    if (this.length === 0) {
        myProduct.id = 1000; // id starts from 1; like in Unix-like system
        console.log(
            "A new product with ID",
            myProduct.id,
            "has been created:\n",
            myProduct
        );
    } else {
        myProduct.id = this[this.length - 1].id + 1;
    }
}

// add a new product to the array_Products
function add_Product(myProduct) {
    this.push(myProduct);
    console.log(
        "The Product ID",
        myProduct.id,
        "has been added to the database:\n",
        this
    );
}

// useless function, because when I use the setter, the product is updated automatically
// search for the product and update it
// function update(myProduct) {
//     var i = 0;
//     while (i < this.length) {
//         if (myProduct.id === this[i].id) {
//             this[i] = myProduct;
//             console.log(
//                 "Updating the product with the ID " + myProduct.id + " :\n",
//                 this[i]
//             );
//             break;
//         }
//         i++;
//     }
// }

// search the given product and remove it
function remove_Product(myProduct) {
    var success = false;
    var index = reduce(
        this,
        function (index, element, i) {
            if (element.id === myProduct.id) {
                console.log(
                    'Disabling the product "' +
                        myProduct.id +
                        '" (found inside the "array_Products", at the of position:' +
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
            'Product with ID "' +
                myProduct.id +
                '" have been changed (product.legal: true -> false) inside "array_Products[' +
                index +
                ']" :\n',
            this
        );
    } else {
        console.log(
            'Product with ID "' +
                myProduct.id +
                '" is not found inside "array_Products" :\n',
            this
        );
        success = false;
    }
    return success;
}
