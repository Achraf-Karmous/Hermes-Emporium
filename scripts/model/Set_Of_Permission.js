function Set_Of_Permissions() {
    var set_Of_Permissions = new Object();
    set_Of_Permissions.id = 32767; // means permission "nobody"
    set_Of_Permissions.login = true; // give the permission to the user to login to his own account

    set_Of_Permissions.view_user = true; // give the permission to the user to "View any user"
    set_Of_Permissions.add_user = false; // give the permission to the user to "Create a new user"
    set_Of_Permissions.update_user = true; // give the permission to the user to "update himself / other users"
    set_Of_Permissions.remove_user = true; // give the permission to the user to "remove himself / other users"
    set_Of_Permissions.manage_users_priority = 0; // permission priority : 0 = means, not allowed to manage other users with the same amount of priority

    set_Of_Permissions.view_product = true; // give the permission to the user to "View any product"
    set_Of_Permissions.add_product = true; // give the permission to the user to "Create a new product"
    set_Of_Permissions.update_product = true; // give the permission to the user to "update his product / product of other users"
    set_Of_Permissions.remove_product = true; // give the permission to the user to "remove his product / product of other users"
    set_Of_Permissions.manage_products_priority = 0; // permission priority : 0 = means, not allowed to manage products of other users with the same amount of priority

    set_Of_Permissions.view_category = true; // give the permission to the user to "view a category"
    set_Of_Permissions.add_category = true; // give the permission to the user to "Create a new category"
    set_Of_Permissions.update_category = false; // give the permission to the user to "update a category"
    set_Of_Permissions.remove_category = false; // give the permission to the user to "remove a category"
    set_Of_Permissions.manage_categories_priority = 0; // permission priority : 0 = means, not allowed to manage a category with the same amount of priority

    set_Of_Permissions.view_bill = true; // give the permission to the user to "view his bills / bills of other users"
    set_Of_Permissions.add_bill = false; // give the permission to the user to "add a new bill / new bills for other users"
    set_Of_Permissions.update_bill = false; // give the permission to the user to "update his bill / bill of other users"
    set_Of_Permissions.remove_bill = false; // give the permission to the user to "remove his bill / bill of other users"
    set_Of_Permissions.manage_bills_priority = 0; // permission priority : 0 = means, not allowed to manage his bill or bill of other users with the same amount of priority

    set_Of_Permissions.view_role = true; // give the permission to the user to "view his role / role of other users"
    set_Of_Permissions.add_role = false; // give the permission to the user to "add a new role"
    set_Of_Permissions.update_role = false; // give the permission to the user to "add a new role"
    set_Of_Permissions.remove_role = false; // give the permission to the user to "add a new role"
    set_Of_Permissions.manage_roles_priority = 0; // permission priority : 0 = means, not allowed to manage roles

    set_Of_Permissions.created_At = new Date();
    set_Of_Permissions.active = true; // active or removed
    set_Of_Permissions.removed_At = null;
    set_Of_Permissions.set = set;
    return set_Of_Permissions;
}
