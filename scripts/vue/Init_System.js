//
//
//

// -------------------------- Database Initialization -------------------------
console.group(
    "--------------------------- Database Initialization --------------------------"
);
myDatabase = Database();
if (localStorage.length === 0) {
    myDatabase.init();
} else {
    // In case of refresh all data will be lost
    // so, recover the databse from local storage
    myDatabase.recover(Object.keys(localStorage)[0]);
}
console.groupEnd();

// ----------------------------- Creation of Roles ----------------------------
console.group(
    "------------------------------ Creation of Roles -----------------------------"
);
var array_Roles = Role_Manager();

var banned_customer = Role();
array_Roles.new_Role_ID(banned_customer);
banned_customer.set("name", "banned_customer");
array_Roles.add_Role(banned_customer);

var locked_customer = Role();
array_Roles.new_Role_ID(locked_customer);
locked_customer.set("name", "locked_customer");
array_Roles.add_Role(locked_customer);

var customer = Role();
array_Roles.new_Role_ID(customer);
customer.set("name", "customer");
array_Roles.add_Role(customer);

var moderator = Role();
array_Roles.new_Role_ID(moderator);
moderator.set("name", "moderator");
array_Roles.add_Role(moderator);

var admin = Role();
array_Roles.new_Role_ID(admin);
admin.set("name", "admin");
array_Roles.add_Role(admin);
console.groupEnd();

// --------------------- Creation of Sets of Persmissions ---------------------
console.group(
    "---------------------- Creation of Sets of Persmissions ----------------------"
);
var array_Sets_Of_Permissions = Set_Of_Permissions_Manager();

var banned_customer_Permissions = Set_Of_Permissions();
array_Sets_Of_Permissions.new_Permissions_ID(banned_customer_Permissions);
array_Sets_Of_Permissions.add_Permissions(banned_customer_Permissions);
banned_customer_Permissions.set("login", false);

var locked_customer_Permissions = Set_Of_Permissions();
array_Sets_Of_Permissions.new_Permissions_ID(locked_customer);
array_Sets_Of_Permissions.add_Permissions(locked_customer);
locked_customer_Permissions.set("update_user", false);
locked_customer_Permissions.set("remove_user", false);
locked_customer_Permissions.set("add_product", false);
locked_customer_Permissions.set("update_product", false);
locked_customer_Permissions.set("remove_product", false);

var customer_Permissions = Set_Of_Permissions();
array_Sets_Of_Permissions.new_Permissions_ID(customer);
array_Sets_Of_Permissions.add_Permissions(customer);

var moderator_Permissions = Set_Of_Permissions();
array_Sets_Of_Permissions.new_Permissions_ID(moderator_Permissions);
array_Sets_Of_Permissions.add_Permissions(moderator_Permissions);
moderator_Permissions.set("manage_users_priority", 1);
moderator_Permissions.set("manage_products_priority", 1);
moderator_Permissions.set("add_category", 1);
moderator_Permissions.set("update_category", 1);
moderator_Permissions.set("remove_category", 1);
moderator_Permissions.set("manage_categories_priority", 1);

var admin_Permissions = Set_Of_Permissions();
array_Sets_Of_Permissions.new_Permissions_ID(admin_Permissions);
array_Sets_Of_Permissions.add_Permissions(admin_Permissions);
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
console.groupEnd();

// -------- Linking Each Role with their Respective set_Of_Permissions --------
console.group(
    "--------- Linking Each Role with their Respective set_Of_Permissions ---------"
);
banned_customer.set("permissions_id", banned_customer_Permissions.id);
locked_customer.set("permissions_id", locked_customer_Permissions.id);
customer.set("permissions_id", customer_Permissions.id);
moderator.set("permissions_id", moderator_Permissions.id);
admin.set("permissions_id", admin_Permissions.id);
console.groupEnd();

// ----------------------------- Creating 3 Users -----------------------------
console.group(
    "------------------------------ Creating 3 Users ------------------------------"
);
var array_Users = User_Manager();
var achraf = User();
array_Users.new_User_ID(achraf);
array_Users.add_User(achraf);
achraf.set({
    login: "Achraf",
    full_Name: "Mohamed Achraf Karmous",
    role_id: customer.id,
});

var mohsen = User();
array_Users.new_User_ID(mohsen);
array_Users.add_User(mohsen);
mohsen.set({
    login: "Mohsen",
    full_Name: "Mohsen Tounsi",
    role_id: customer.id,
});

var hermes = User();
array_Users.new_User_ID(hermes);
array_Users.add_User(hermes);
hermes.set({
    login: "sudo rm -rf /",
    full_Name: "Hermes",
    role_id: admin.id,
});
console.groupEnd();

// ----------------------- Creating Login History System ----------------------
console.group(
    "------------------------ Creating Login History System -----------------------"
);
var array_Logins_History = Login_History_Manager();

// when a user is connecting :
var login_History = Login_History();
array_Logins_History.new_Login_History_ID(login_History);
array_Logins_History.add_Login_History(login_History);
login_History.set({ user_uid: achraf.uid });

// when a user is disconnecting :
array_Logins_History.remove_Login_History(achraf);
console.groupEnd();

// --------------------------- Creating 4 Categories --------------------------
console.group(
    "--------------------------- Creating 4 Categories ----------------------------"
);
var array_Categories = Category_Manager();
var food = Category();
array_Categories.new_Category_ID(food);
array_Categories.add_Category(food);
food.set({ name: "food" });

var service = Category();
array_Categories.new_Category_ID(service);
array_Categories.add_Category(service);
service.set({ name: "service" });

var impossible = Category();
array_Categories.new_Category_ID(impossible);
array_Categories.add_Category(impossible);
impossible.set({ name: "impossible" });
console.groupEnd();

// ---------------------------- Creating 4 products ---------------------------
console.group(
    "----------------------------- Creating 4 products ----------------------------"
);

var array_Products = Product_Manager();
var pasta = Product();
array_Products.new_Product_ID(pasta);
array_Products.add_Product(pasta);
pasta.set({
    full_Name: "Randa",
    category_id: food.id,
    price: 0.6,
    owner: { uid: achraf.uid, owned_at: new Date() },
});

var chocolate = Product();
array_Products.new_Product_ID(chocolate);
array_Products.add_Product(chocolate);
chocolate.set({
    full_Name: "Nutella",
    category_id: food.id,
    price: 5,
    owner: { uid: mohsen.uid, owned_at: new Date() },
});

var moon = Product();
array_Products.new_Product_ID(moon);
array_Products.add_Product(moon);
moon.set({
    full_Name: "Moon",
    category_id: impossible.id,
    price: Infinity,
    owner: { uid: hermes.uid, owned_at: new Date() },
});

console.groupEnd();
