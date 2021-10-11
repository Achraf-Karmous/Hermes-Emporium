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
    <br>
    <label class="Label" for="login">Enter your full name : </label>
    <input type="text" id="fullName-input" name="fname">
    <button id="save-fullName" type="button"> Save </button>
    <br>
    <br>
</div>
<div class="owned-product">
    <br>
    <label class="Label" for="login">Enter your full name : </label>
    <input type="text" id="fullName-input" name="fname">
    <button id="save-fullName" type="button"> Save </button>
    <br>
    <br>
</div>`);
$(".main-body").append($login_form);
$(".user-fullName").hide();
$("a").removeAttr("href");

$("#login-btn").on("click", function () {
    // first we read the value of the tweet input
    var login = $("#login-input").val();
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
        user = array_Users[index];

        // create a new login_history
        var login_History = Login_History();
        array_Logins_History.new_Login_History_ID(login_History);
        array_Logins_History.add_Login_History(login_History);
        login_History.set({ user_uid: user.uid });
        myDatabase.addElement("login_History", login_History);
        myDatabase.addElement("array_Users", array_Users);
        myDatabase.addElement("uid", user.uid);
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
        $(".login-container").hide();
        $(".user-fullName").show();
    }
});

$("#save-fullName").on("click", function () {
    console.log("AAAAAAAAAAAAAAAAAAAA");
    console.log(index);
    // first we read the value of the tweet input
    var fullName = $("#fullName-input").val();
    var array_Users = myDatabase.object["array_Users"];
    var user = array_Users[array_Users.length - 1];
    user.set("full_Name", fullName);

    // create a new login_history
    var login_History = Login_History();
    array_Logins_History.new_Login_History_ID(login_History);
    array_Logins_History.add_Login_History(login_History);
    login_History.set({ user_uid: user.uid });
    myDatabase.addElement("login_History", login_History);
    myDatabase.addElement("array_Users", array_Users);
    $(".user-fullName").hide();
    $(".login").hide();
    $(".disconnect").show();
});
