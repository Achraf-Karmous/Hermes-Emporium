function User() {
    var user = new Object();
    user.uid = 32767; // means user "nobody"
    user.login = null;
    user.full_Name = null;
    user.phone_Number = null;
    user.adress = null;
    user.picture_URL = null;
    user.product_id = new Array();
    user.created_At = new Date();
    user.active = true; // active or removed
    user.removed_At = null;
    user.set = set;
    return user;
}
