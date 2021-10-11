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
    var array_Logins_History = myDatabase.object["array_Logins_History"];
    var uid = array_Logins_History[array_Logins_History.length - 1];
    return uid;
}
console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF");
console.log(render_All_History());
