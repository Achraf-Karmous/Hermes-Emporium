function Login_History() {
    var login_History = new Object();
    login_History.id = 32767; // means "nothing"
    login_History.user_uid = null;
    login_History.created_At = new Date();
    login_History.active = true; // active or removed
    login_History.removed_At = null;
    login_History.set = set;
    return login_History;
}
