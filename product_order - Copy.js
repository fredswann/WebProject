function calcTotal() {
    // TURN OFF PREVIOUS ERROR MESSAGES
    for (i=1; i<=10; i++) {
       var myErr = document.getElementById("err" + i);
       myErr.innerHTML = "";
    }
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
    var discounted_rate = document.getElementById("discount_rate").value;
    
    

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
        // ASSIGN OUTPUT
    var discounted_amount = unit_price * (discounted_rate / 100);
    var order_total = quantity * (unit_price - discounted_amount);
    var myOut = "Thank you for ordering, " + first_name + " ";
    myOut += last_name + ". Your order total is $" + order_total +".";
    document.getElementById("output").innerHTML = myOut;
    }

    


}


function init ()
{
    var order_button = document.getElementById("order_button")
    order_button.onclick= calcTotal;

    // ADD ERROR CLASS TO SPAN
    for (i=1; i<=10; i++) {
        var myErr = document.getElementById("err" + i);
        myErr.className = "error";
    }
}

window.onload = init;