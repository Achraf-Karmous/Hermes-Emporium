//
//
//

// init data base
myDatabase = Database();
if (localStorage.length === 0) {
    myDatabase.init();
} else {
    // In case of refresh all data will be lost
    // so, recover the databse from local storage
    myDatabase.recover(Object.keys(localStorage)[0]);
}

var array_Sets_Of_Permissions = Set_Of_Permissions_Manager();
var banned_customer = Set_Of_Permissions();
array_Sets_Of_Permissions.newID(banned_customer);
array_Sets_Of_Permissions.add(banned_customer);
banned_customer.set("login", false);

var locked_customer = Set_Of_Permissions();
array_Sets_Of_Permissions.newID(locked_customer);
array_Sets_Of_Permissions.add(locked_customer);
banned_customer.set("update_user", false);
banned_customer.set("remove_user", false);
banned_customer.set("add_product", false);
banned_customer.set("update_product", false);
banned_customer.set("remove_product", false);

var customer = Set_Of_Permissions();
array_Sets_Of_Permissions.newID(customer);
array_Sets_Of_Permissions.add(customer);

var moderator = Set_Of_Permissions();
array_Sets_Of_Permissions.newID(moderator);
array_Sets_Of_Permissions.add(moderator);
moderator.set("manage_users_priority", 1);
moderator.set("manage_products_priority", 1);
moderator.set("add_category", 1);
moderator.set("update_category", 1);
moderator.set("remove_category", 1);
moderator.set("manage_categories_priority", 1);

var admin = Set_Of_Permissions();
array_Sets_Of_Permissions.newID(admin);
array_Sets_Of_Permissions.add(admin);
admin.set("manage_users_priority", 1);
admin.set("manage_products_priority", 1);
admin.set("add_category", 1);
admin.set("update_category", 1);
admin.set("remove_category", 1);
admin.set("manage_categories_priority", 1);
admin.set("add_role", true);
admin.set("update_role", true);
admin.set("remove_role", true);
admin.set("manage_roles_priority", 1);

var spy = Set_Of_Permissions();
array_Sets_Of_Permissions.remove(spy);
