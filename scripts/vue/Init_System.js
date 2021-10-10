//
//
//

// ----------------------- init data base -----------------------
myDatabase = Database();
if (localStorage.length === 0) {
    myDatabase.init();
} else {
    // In case of refresh all data will be lost
    // so, recover the databse from local storage
    myDatabase.recover(Object.keys(localStorage)[0]);
}

// ---------------------- Creation of Roles ---------------------
var array_Roles = Role_Manager();

var banned_customer = Role();
array_Roles.newID(banned_customer);
banned_customer.set("name", "banned_customer");
array_Roles.add(banned_customer);

var locked_customer = Role();
array_Roles.newID(locked_customer);
locked_customer.set("name", "locked_customer");
array_Roles.add(locked_customer);

var customer = Role();
array_Roles.newID(customer);
customer.set("name", "customer");
array_Roles.add(customer);

var moderator = Role();
array_Roles.newID(moderator);
moderator.set("name", "moderator");
array_Roles.add(moderator);

var admin = Role();
array_Roles.newID(admin);
admin.set("name", "admin");
array_Roles.add(admin);

// -------------- Creation of Sets of Persmissions --------------
var array_Sets_Of_Permissions = Set_Of_Permissions_Manager();

var banned_customer_Permissions = Set_Of_Permissions();
array_Sets_Of_Permissions.newID(banned_customer_Permissions);
array_Sets_Of_Permissions.add(banned_customer_Permissions);
banned_customer_Permissions.set("login", false);

var locked_customer_Permissions = Set_Of_Permissions();
array_Sets_Of_Permissions.newID(locked_customer);
array_Sets_Of_Permissions.add(locked_customer);
locked_customer_Permissions.set("update_user", false);
locked_customer_Permissions.set("remove_user", false);
locked_customer_Permissions.set("add_product", false);
locked_customer_Permissions.set("update_product", false);
locked_customer_Permissions.set("remove_product", false);

var customer_Permissions = Set_Of_Permissions();
array_Sets_Of_Permissions.newID(customer);
array_Sets_Of_Permissions.add(customer);

var moderator_Permissions = Set_Of_Permissions();
array_Sets_Of_Permissions.newID(moderator_Permissions);
array_Sets_Of_Permissions.add(moderator_Permissions);
moderator_Permissions.set("manage_users_priority", 1);
moderator_Permissions.set("manage_products_priority", 1);
moderator_Permissions.set("add_category", 1);
moderator_Permissions.set("update_category", 1);
moderator_Permissions.set("remove_category", 1);
moderator_Permissions.set("manage_categories_priority", 1);

var admin_Permissions = Set_Of_Permissions();
array_Sets_Of_Permissions.newID(admin_Permissions);
array_Sets_Of_Permissions.add(admin_Permissions);
admin_Permissions.set("manage_users_priority", 1);
admin_Permissions.set("manage_products_priority", 1);
admin_Permissions.set("add_category", 1);
admin_Permissions.set("update_category", 1);
admin_Permissions.set("remove_category", 1);
admin_Permissions.set("manage_categories_priority", 1);
admin_Permissions.set("add_role", true);
admin_Permissions.set("update_role", true);
admin_Permissions.set("remove_role", true);
admin_Permissions.set("manage_roles_priority", 1);

// - Linking Each Role with their Respective set_Of_Permissions -
banned_customer.set("permissions_id", banned_customer_Permissions.id);
locked_customer.set("permissions_id", locked_customer_Permissions.id);
customer.set("permissions_id", customer_Permissions.id);
moderator.set("permissions_id", moderator_Permissions.id);
admin.set("permissions_id", admin_Permissions.id);
