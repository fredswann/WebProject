
// VALIDATE FORM
function validation() {
    // TURN OFF PREVIOUS ERROR MESSAGES
    for (i=1; i<=10; i++) {
       var myErr = document.getElementById("err" + i);
       myErr.innerHTML = "";
    }
    // REMOVE OUTPUT
    document.getElementById("output").innerHTML = "";


    // PULL IN FORM FIELDS
    var product = document.getElementById("product").value;
    var quantity = document.getElementById("quantity").value;
    var unit_price = document.getElementById("unit_price").value;
    var order_date = document.getElementById("order_date").value;
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var payment_type = document.getElementById("payment_type").value;
    var card_number = document.getElementById("card_number").value;
    var security_code = document.getElementById("security_code").value;
    var discount_rate = document.getElementById("discount_rate").value;
    
    

    // DO YOU HAVE A FLAG
    var valid = true; 

    if (product == "") {
        document.getElementById("err1").innerHTML = "ERROR!!"
        valid= false;
    }

    if (isNaN(quantity) || quantity < 1) {
        document.getElementById("err2").innerHTML = "ERROR";
        valid = false;
    }

    if (isNaN(unit_price) || unit_price < 0) {
        document.getElementById("err3").innerHTML = "ERROR";
        valid = false;
    }

    if (isNaN(discount_rate) || discount_rate <= 0) {
        document.getElementById("err4").innerHTML = "ERROR";
        valid = false;
    }

    if (order_date == "" || order_date.length < 8 || order_date.length > 10) {
        document.getElementById("err5").innerHTML = "ERROR";
        valid = false;
    }

    if (first_name == "") {
        document.getElementById("err6").innerHTML = "ERROR";
        valid = false;
    }

    if (last_name == "") {
        document.getElementById("err7").innerHTML = "ERROR";
        valid = false;
    }

    if (payment_type == "") {
        document.getElementById("err8").innerHTML = "ERROR";
        valid = false;
    }

    if (isNaN(card_number) || card_number.length !== 16) {
        document.getElementById("err9").innerHTML = "ERROR";
        valid = false;
    }

    if (isNaN(security_code) || security_code.length !== 3) {
        document.getElementById("err10").innerHTML = "ERROR";
        valid = false;
    }

    if (valid) {
        calcTotal(unit_price, discount_rate, quantity, first_name, last_name);
    } 
}

function calcTotal(unit_price, discount_rate, quantity, first_name, last_name) {
    // ASSIGN OUTPUT
        var discounted_amount = unit_price * (discount_rate / 100);
        var order_total = quantity * (unit_price - discounted_amount);
        var myOut = "Thank you for ordering, " + first_name + " ";
        myOut += last_name + ". Your order total is $" + order_total +".";
        document.getElementById("output").innerHTML = myOut;
}

// LOGIN TO APP 
 function login() {
    // RESET ERROR
    var myOut = document.getElementById("output");
    myOut.innerHTML = ""; 

    // CREDENTIALS ARRAYS
    var users = ["admin1", "admin2", "admin3", "admin4"];
    var pass = ["pass1", "pass2", "pass3", "pass4"]; 

    // FORM VALUES
    var aUser = document.getElementById("user_name").value;
    var aPass = document.getElementById("password").value;

    if (aUser === "" || aPass === "") {
        myOut.innerHTML = "Username/Password cannot be blank";
        if (aUser === "") { 
            U.$("user_name").focus();
        } else {
            U.$("password").focus();
        }
    } else {
        // ARE WE GOOD?
    var valid = false;
        for (i=0; i <users.length; i++) {
            if (users[i] == aUser && pass[i] == aPass) {
                valid = true; 
                windown.location = "product_order.html";
                break; 
            }
        }

        // IF NOT GOOD ...
        if (!valid) {
            myOut.innerHTML = "Incorrect UserName/Password";
        }
    }

    

    // IF NOT GOOD ...
    if(!valid) {
        myOut.className = "error";
        myOut.innerHTML = "Incorrect UserName/Password";
    }
} 

// LIMIT TEXT IN COMMENT AREA
function limitText () {
    var comments = U.$("comments");
    var ct = comments.value.length;
    if (ct >100) {
        comments.value = comments.value.slice(0,100);
    }
    U.$("count").innerHTML = comments.value.length; 
}
    //RESET THE FORM
function reset () {
    for (i=1; i<=10; i++) {
        document.getElementById("err" + i).innerHTML = "";
    }
    document.getElementById("output").innerHTML ="";
    //RESET THE INPUT BOXES
    U.$("product").selectedIndex = 0;
    U.$("order_date").value = "";
}



function init ()
{
    var order_button = document.getElementById("login_button")
    if (order_button !== null) {
        order_button.onclick= login;
    }

    var order_button = document.getElementById("order_button")
    if (order_button !== null) {
        order_button.onclick= validation;
    }

    // PUT DATE ON FORM
    /* var d = new Date();
    var fDate = (d.getMonth() +1) + "/" + d.getDate() + "/" + d.getFullYear();
    var order_date = document.getElementById("order_date");
    if (order_date !== null) {
        order_date.value = fDate;
    } */

    // ADD ERROR CLASS TO SPAN
    for (i=1; i<=10; i++) {
        var myErr = document.getElementById("err" + i);
        if (myErr !== null) {
            myErr.className = "error";
        }
    }
    // SHOW TIME
    /* U.addEvent(U.$("comments"), "keyup", limitText);
    U.$("current_date").innerHTML = Date();
    U.addEvent(U.$("current_date"), "mouseover", function () {
        U.$("current_date").innerHTML = Date();
    }); */

    // RESET THE FORM
    U.addEvent(U.$("reset_button"), "click", function () {
        var result = confirm("Are you sure?");
        if (result) {
            reset();
        }        
    })
}

window.onload = init;