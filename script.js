function showDetails(propertyName) {
    alert("You selected: " + propertyName +
    "\n\nContact us to know more about this property!");
}

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("customerName").value;
    let email = document.getElementById("customerEmail").value;
    let message = document.getElementById("customerMessage").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the details.");
    } else {
        alert("Thank you, " + name +
        "! Your enquiry has been received.");

        document.getElementById("contactForm").reset();
    }

});
