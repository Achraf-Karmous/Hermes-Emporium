var $login_form = $(`
<div class="login-container">
    <br>
    <label class="Label" for="login">Login as:</label>
    <input type="text" id="login-input" name="fname">
    <button id="login-btn" type="button"> Connect </button>
    <br>
    <br>
</div>
<div class="user-fullName">
    <br>
    <label class="Label" for="login">Enter your full name : </label>
    <input type="text" id="fullName-input" name="fname">
    <button id="save-fullName" type="button"> Save </button>
    <br>
    <br>
</div>
<div class="login-history">
</div>
<div class="owned-product">
</div>`);
$(".main-body").append($login_form);
$(".user-fullName").hide();
$(".login").hide();
$("a").removeAttr("href");

$("#login-btn").on("click", function () {
    // first we read the value of the tweet input
    var login = $("#login-input").val();
    $("#login-input").val("");
    window.index = reduce(
        array_Users,
        function (index, element, i) {
            if (element.login === login) {
                return i; // index will be changed only once with this return
            }
            return index; // return the same value
        },
        -1 // means not found
    );
    if (index >= 0) {
        var user = array_Users[index];

        // create a new login_history
        var login_History = Login_History();
        array_Logins_History.new_Login_History_ID(login_History);
        array_Logins_History.add_Login_History(login_History);
        login_History.set({ user_uid: user.uid });
        myDatabase.addElement("login_History", login_History);
        myDatabase.addElement("array_Users", array_Users);
        myDatabase.addElement("current_user", user);
        $(".login-container").hide();
        $(".login").hide();
        $(".disconnect").show();
        $(".dashboard").show();
    } else {
        var user = User();
        array_Users.new_User_ID(user);
        array_Users.add_User(user);
        user.set({
            login: login,
            role_id: customer.id,
        });
        myDatabase.addElement("current_user", user);
        $(".login-container").hide();
        $(".user-fullName").show();
    }
});

$("#save-fullName").on("click", function () {
    // first we read the value of the tweet input
    var fullName = $("#fullName-input").val();
    // Since it's a new user, we take the last user created & modify him
    var array_Users = myDatabase.object["array_Users"];
    array_Users[array_Users.length - 1].set({ full_Name: fullName });

    // create a new login_history
    var login_History = Login_History();
    array_Logins_History.new_Login_History_ID(login_History);
    array_Logins_History.add_Login_History(login_History);
    login_History.set({ user_uid: array_Users[array_Users.length - 1].uid });
    myDatabase.addElement("login_History", login_History);
    myDatabase.addElement("array_Users", array_Users);
    $(".user-fullName").hide();
    $(".login").hide();
    $(".disconnect").show();
});

$(".disconnect").on("click", function () {
    // first we read the value of the tweet input
    $(".disconnect").hide();
    $(".login-container").show();
});
