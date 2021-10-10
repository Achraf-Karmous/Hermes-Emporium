function Category() {
    var category = new Object();
    category.id = 32767; // means user "nobody"
    category.name = null;
    category.created_At = new Date();
    category.active = true; // active or removed
    category.removed_At = null;
    category.set = set;
    return category;
}
