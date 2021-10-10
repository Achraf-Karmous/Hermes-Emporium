function Role() {
    var role = new Object();
    role.id = 32767; // means role "nobody"
    role.name = null;
    role.permissions_id = null;
    role.created_At = new Date();
    role.active = true; // active or removed
    role.removed_At = null;
    role.set = set;
    return role;
}
