function Product() {
    var product = new Object();
    product.id = 32767; // means object "nothing"
    product.owner = {}; // object of users.uid & owned_at
    product.owner.uid = 32767;
    product.owner.owned_at = {}; // object of dates
    product.reference = "";
    product.category_id = "";
    product.designation = "";
    product.price = -1;
    product.money_name = "TND";
    product.weight = "";
    product.dimention = "";
    product.quantity = "";
    product.full_Name = "";
    product.brand = "";
    product.stars = "";
    product.picture_URL = null;
    product.added_At = new Date();
    product.legal = true; // active or removed
    product.removed_At = null;
    product.set = set;
    console.log("Creating a new product:\n", product);
    return product;
}
