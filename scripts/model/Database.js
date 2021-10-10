function Database() {
    var database = new Object();
    database.name = null;
    database.string = null;
    database.object = null;
    database.init = init;
    database.recover = recover;
    database.getElement = getElement;
    database.addElement = addElement;
    database.deleteElement = deleteElement;
    database.destroy = destroy;
    return database;
}

// this function will init a new database variable
function init() {
    this.name = "database_" + generate_random_string();
    this.string = JSON.stringify({});
    this.object = new Object();
    // if database is not stored inside the localstorage (if it's === null)
    if (!localStorage.getItem(this.name)) {
        // create a new database inside the local storage
        localStorage.setItem(this.name, this.string);
        // Output inside the console:
        console.log(
            '"' + this.name + '" has been created inside the local storage'
        );
    } else {
        // Output inside the console:
        console.log('"' + this.name + '" already exists ... Operation Failed');
    }
}

// load from the localstorage into our myDatabase object
// to use in cas we lost actual data inside myDatabase
function recover(database_name) {
    // if we lost the name of the data base
    // check the name inside the history of the chrome console
    if (!this.name) {
        // if the database name is not falsy
        if (database_name) {
            // then recover the database_name
            this.name = database_name;
        } else {
            return "you lost all your data!!!\nCheck the name of the database inside the history of your web browser history\nAnd try again with:\nmyDatabaserecover(Name_of_The_Database)";
        }
    }
    // recover the myDatabase.string from our local storage
    this.string = localStorage.getItem(this.name);
    // parse the loaded string into an object and save it into myDatabase.object
    this.object = JSON.parse(this.string);
    console.log(
        "Recovering the content of " +
            this.name +
            " from the local storage :\n",
        this.object
    );
    return this.object;
}

// Add the element into myDatabase and update the localStorage
function addElement(variable_name, value) {
    // create an attribue for the variable
    this.object[variable_name] = value;
    // update the string value
    this.string = JSON.stringify(this.object);
    // update the string value of the local storage
    localStorage.setItem(this.name, this.string);
    console.log("saving the content of " + this.name + " :", this.string);
}

// search for the name of element inside the
function getElement(variable_name) {
    var myElement;
    var database_content = JSON.parse(this.string);
    for (var key in database_content) {
        if (key === variable_name) {
            myElement = database_content[key];
            break;
        }
    }
    console.log(
        'getting the content of the element "' +
            variable_name +
            '" from ' +
            this.name +
            " :\n",
        myElement
    );
    return myElement;
}

// delete an element from the database
function deleteElement(variable_name) {
    var deleted_Object;
    this.object = JSON.parse(this.string);
    for (var key in this.object) {
        if (key === variable_name) {
            deleted_Object = delete this.object[key];
            break;
        }
    }
    // if the object have been deleted from the myDatabase.object
    if (deleted_Object) {
        // then update our myDatabase.string
        this.string = JSON.stringify(this.object);
        // and update our localStorage
        localStorage.setItem(this.name, this.string);
        console.log(
            'the element "' +
                variable_name +
                '" have been removed from ' +
                this.name +
                " :\n",
            this.object
        );
    }
}

function destroy() {
    // if there's a variable called "database" inside the local storage
    if (localStorage.getItem(this.name)) {
        // then destroy it
        localStorage.removeItem(this.name);
        console.log(
            '"' + this.name + '" has been deleted from the local storage'
        );
    } else {
        console.log("Already Deleted ... Operation Failed");
    }
}

function empty_localStorage() {
    // it's stupid...
    // but I want to call it with an easy function name to remember
    localStorage.clear();
    console.log("All local storage have been deleted");
}

// ---------- Testing these methods ---------------

// clearing our local storage
empty_localStorage();

// creating a new database
myDatabase = Database();

// Initializing security + saving it into the local storage
myDatabase.init();

// recovering our actual database
myDatabase.recover(); // this will return the object

//save our modified version of myDatabase
myDatabase.addElement("array", [1, 2, 2, 2, 4]);

// Messing up our database
myDatabase.string = "";
myDatabase.object = undefined;

// getting the new value of our database
myDatabase.recover();

// getting the element from our database
myDatabase.getElement("array");
myDatabase.deleteElement("array");

// removing the database from our local storage
myDatabase.destroy();
