function Login_History() {
    var login_History = new Object();
    login_History.id = 32767; // means "nothing"
    login_History.user_uid = null;
    login_History.created_At = new Date();
    login_History.active = true; // connected or disconnected
    login_History.removed_At = null;
    login_History.set = set;
    console.log("Creating a new login history:\n", login_History);
    return login_History;
}
