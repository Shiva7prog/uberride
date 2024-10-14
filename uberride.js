
let confirmRide = confirm("Do you want to book a ride?");

if (confirmRide) {

    setTimeout(function() {
        alert("Your ride has been successfully booked! A driver will arrive shortly.");
    }, 3000);
} else {

    alert("Ride booking canceled.");
}