//
//
//

// -------------------------- Database Initialization -------------------------
console.group(
    "--------------------------- Database Initialization --------------------------"
);
window.myDatabase = Database();
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

myDatabase.addElement("array_Roles", array_Roles);
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

myDatabase.addElement("array_Sets_Of_Permissions", array_Sets_Of_Permissions);
console.groupEnd();

// ----------------------------- Creating 3 Users -----------------------------
console.group(
    "------------------------------ Creating 4 Users ------------------------------"
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

var schnell = User();
array_Users.new_User_ID(schnell);
array_Users.add_User(schnell);
schnell.set({
    login: "Schnell",
    full_Name: "Schnell",
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

myDatabase.addElement("array_Users", array_Users);
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

myDatabase.addElement("array_Logins_History", array_Logins_History);
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

myDatabase.addElement("array_Categories", array_Categories);
console.groupEnd();

// ---------------------------- Creating 4 products ---------------------------
console.group(
    "----------------------------- Creating 4 products ----------------------------"
);

var array_Products = Product_Manager();
var coke = Product();
array_Products.new_Product_ID(coke);
array_Products.add_Product(coke);
coke.set({
    full_Name: "Coca Cola",
    category_id: food.id,
    price: 1.5,
    quantity: 2000,
    owner: { uid: achraf.uid, owned_at: new Date() },
});

var chocolate = Product();
array_Products.new_Product_ID(chocolate);
array_Products.add_Product(chocolate);
chocolate.set({
    full_Name: "Nutella",
    category_id: food.id,
    price: 5,
    quantity: 3000,
    owner: { uid: mohsen.uid, owned_at: new Date() },
});

var sandwich = Product();
array_Products.new_Product_ID(sandwich);
array_Products.add_Product(sandwich);
sandwich.set({
    full_Name: "sandwich",
    category_id: food.id,
    price: 8,
    quantity: 3000,
    owner: { uid: schnell.uid, owned_at: new Date() },
});

var moon = Product();
array_Products.new_Product_ID(moon);
array_Products.add_Product(moon);
moon.set({
    full_Name: "Moon",
    category_id: impossible.id,
    price: Infinity,
    quantity: 1,
    owner: { uid: hermes.uid, owned_at: new Date() },
});

myDatabase.addElement("array_Products", array_Products);
console.groupEnd();

// ----------------------------- Creating 2 bills -----------------------------
console.group(
    "------------------------------ Creating 2 bills ------------------------------"
);

var array_Bills = Bill_Manager();

// Mohsen Bought from Achraf 1 Coke
var bill_1 = Bill();
array_Bills.new_Bill_ID(bill_1);
array_Bills.add_Bill(bill_1);
bill_1.set({
    buyer_id: mohsen.uid,
    seller_id: achraf.uid,
    products_ids: [coke.id],
    total_TaxIncluded: 1.5,
});

// Mohsen Bought from Schnell 1 Sandwich
var bill_2 = Bill();
array_Bills.new_Bill_ID(bill_2);
array_Bills.add_Bill(bill_2);
bill_2.set({
    buyer_id: mohsen.uid,
    seller_id: schnell.uid,
    products_ids: [sandwich.id],
    total_TaxIncluded: 6,
});

myDatabase.addElement("array_Bills", array_Bills);
console.log(myDatabase.object);
console.groupEnd();
