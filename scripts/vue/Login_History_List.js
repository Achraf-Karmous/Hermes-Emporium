//

function render_Login_History(myLogin_History) {
    var string;
    string +=
        `<div class="login-history">Logged in at ` + myLogin_History.created_at;
    if (myLogin_History.active) {
        string += `</div><div class="login-status">Still active</div>`;
    } else {
        string +=
            `</div><div class="login-status">Logged out at ` +
            myLogin_History.removed_At +
            `active</div>`;
    }
    return $(string);
}

function render_All_History() {
    var user = myDatabase.getElement("current_user");
    var history = myDatabase.getElement("array_Logins_History");
    var histories_list = filter(history, function (element) {
        return user.uid === element.user_uid;
    });
    each(histories_list, function (element) {
        render_Login_History(element);
    });
}
