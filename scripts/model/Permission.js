function permission() {
    var permission = new Object();
    permission.id = 32767; // means permission "nobody"
    permission.login = true; // give the permission to the user to login

    permission.view_user = true; // give the permission to the user to "View any user"
    permission.add_user = false; // give the permission to the user to "Create a new user"
    permission.update_user = true; // give the permission to the user to "update himself / other users"
    permission.remove_user = true; // give the permission to the user to "remove himself / other users"
    permission.manage_users_priority = 0; // permission priority : 0 = means, not allowed to manage other users with the same amount of priority

    permission.view_product = true; // give the permission to the user to "View any product"
    permission.add_product = true; // give the permission to the user to "Create a new product"
    permission.update_product = true; // give the permission to the user to "update his product / product of other users"
    permission.remove_product = true; // give the permission to the user to "remove his product / product of other users"
    permission.manage_products_priority = 0; // permission priority : 0 = means, not allowed to manage products of other users with the same amount of priority

    permission.view_category = true; // give the permission to the user to "view a category"
    permission.add_category = true; // give the permission to the user to "Create a new category"
    permission.update_category = false; // give the permission to the user to "update a category"
    permission.remove_category = false; // give the permission to the user to "remove a category"
    permission.manage_categories_priority = 0; // permission priority : 0 = means, not allowed to manage a category with the same amount of priority

    permission.view_bill = true; // give the permission to the user to "view his bills / bills of other users"
    permission.add_bill = false; // give the permission to the user to "add a new bill / new bills for other users"
    permission.update_bill = false; // give the permission to the user to "update his bill / bill of other users"
    permission.remove_bill = false; // give the permission to the user to "remove his bill / bill of other users"
    permission.manage_bills_priority = 0; // permission priority : 0 = means, not allowed to manage his bill or bill of other users with the same amount of priority

    permission.view_role = true; // give the permission to the user to "view his role / role of other users"
    permission.add_role = false; // give the permission to the user to "add a new role"
    permission.update_role = false; // give the permission to the user to "add a new role"
    permission.remove_role = false; // give the permission to the user to "add a new role"
    permission.manage_roles_priority = 0; // permission priority : 0 = means, not allowed to manage roles

    permission.created_At = new Date();
    permission.active = true; // active or removed
    permission.removed_At = null;
    permission.set = set;
    return permission;
}
