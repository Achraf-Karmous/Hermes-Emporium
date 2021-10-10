function User() {
    var user = new Object();
    user.uid = 32767; // means user "nobody"
    user.role_id = 32767; // means role "nobody"
    user.login = null;
    user.full_Name = null;
    user.phone_Number = null;
    user.adress = null;
    user.picture_URL = null;
    user.products = new Object(); // Collections of (products, status, date)
    user.products.id = null; // id of the product
    user.products.status = null; // owned, sold, bought, visited
    user.products.date_At = null; // date of the actual action (status)
    user.products.bill_id = null; // id of the bill
    user.created_At = new Date();
    user.active = true; // active or removed
    user.removed_At = null;
    user.set = set;
    console.log("Creating a new user:\n", user);
    return user;
}
