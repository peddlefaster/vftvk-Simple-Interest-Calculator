// Respond to button press
function compute()
{
    let principal = parseInt(document.getElementById("principal").value);
    // Check 'Amount' input & respond if invalid 
    if( isNaN(principal) || principal <= 0){
        alert("Please enter initial investment, with value greater than $0.00");
        document.getElementById("principal").focus();
        return;
    }
    let rate = parseFloat(document.getElementById("rate").value);
    let years = parseInt(document.getElementById("years").value);

    // Calc time-based results
    let year = new Date().getFullYear()+years;
    let interest = principal * years * rate * 0.01;
    let amount = interest + principal;

    // Compose & assign output message
    document.getElementById("result").innerHTML =
    "If you deposit <mark> $"+principal+"</mark>,"+
    "\<br\>at an interest rate of <mark> "+rate+"%</mark>,"+ 
    "\<br\>you will receive <mark> $"+interest+"</mark> in interest."+
    "\<br\>By "+year+" your investment totals <mark> $"+amount+"</mark>"
}

// Respond to slider movement
function updateRate() 
{
    // Get the rate value from slider... 
    var rateval = document.getElementById("rate").value;
    // ... and display it
    document.getElementById("rate_val").innerText=rateval;
}