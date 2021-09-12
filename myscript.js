// define a function to perform our calculation.
function calculate () {
    // retrieve the values from the amount and percentage fields
    // and store them in variables.
    var amount = $('#amount').val();
    var percentage = $('#percentage').val();
    
    // calculate the actual tip.
    var tip = amount * (percentage / 100);
    
    // also calculate the total.
    
    // Note the 'Number' function: amount is actually a string
    // and adding a number to a string just makes a longer
    // string, so we convert it to a number first.
    var total = Number(amount) + tip;
    
    // Store the values in the result fields
    
    // Note that we call the 'toFixed' function,
    // which is a property of all numbers. This
    // makes sure there are only two digits after
    // the decimal point.
    $('#tip').val( tip.toFixed(2) );
    $('#total').val( total.toFixed(2) );
    
    // submit event fucntions must return false,
    // to tell the browser not to load a new page.
    return false;
}

// attach our function to the form's submit event.
$('#calculator').submit( calculate );