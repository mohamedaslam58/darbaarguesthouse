function sendToWhatsApp() {
    var name = document.getElementById("name").value;
    var place = document.getElementById("place").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var whatsappNumber = "918925143951"; // 🔴 Replace with your number (country code + number)

    var whatsappMessage =
        "Name: " + name + "%0A" +
        "Place: " + place + "%0A" +
        "Subject: " + subject + "%0A" +
        "Message: " + message;

    var whatsappURL =
        "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage;

    window.open(whatsappURL, "_blank");
}

function setValue(id, value) {
    document.getElementById(id).innerText = value;
}

function parseDate(dateStr) {
    // Expected format: DD-MM-YYYY
    var parts = dateStr.split("-");
    return new Date(parts[2], parts[1] - 1, parts[0]);
}

function sendEnquiryToWhatsApp() {
    var arrival = document.getElementById("arrivalDate").value.trim();
    var departure = document.getElementById("departureDate").value.trim();
    var adults = document.getElementById("adults").innerText;
    var children = document.getElementById("children").innerText;

    // 🔴 Validation: Empty fields
    if (!arrival || !departure) {
        alert("Please select both Arrival and Departure dates.");
        return;
    }

    var arrivalDate = parseDate(arrival);
    var departureDate = parseDate(departure);

    // 🔴 Validation: Invalid date format
    if (isNaN(arrivalDate) || isNaN(departureDate)) {
        alert("Invalid date format. Please use DD-MM-YYYY.");
        return;
    }

    // 🔴 Validation: Departure must be after Arrival
    // if (departureDate <= arrivalDate) {
    //     alert("Departure date must be after Arrival date.");
    //     return;
    // }

    var whatsappNumber = "918925143951"; // 🔴 your WhatsApp number

    var message =
        "📍 *Room Enquiry* %0A%0A" +
        "Arrival Date: " + arrival + "%0A" +
        "Departure Date: " + departure + "%0A" +
        "Adults: " + adults + "%0A" +
        "Children: " + children;

    var url = "https://wa.me/" + whatsappNumber + "?text=" + message;
    window.open(url, "_blank");
}

$(document).ready(function () {

    $('#arrivalDate').datepicker({
        format: 'dd-mm-yyyy',
        autoclose: true,
        startDate: new Date()
    }).on('changeDate', function (e) {
        // Set minimum departure date
        $('#departureDate').datepicker('setStartDate', e.date);
    });

    $('#departureDate').datepicker({
        format: 'dd-mm-yyyy',
        autoclose: true,
        startDate: new Date()
    });

});

function selectCount(event, id, value) {
    event.preventDefault(); // stop page jump
    document.getElementById(id).innerHTML = value + ' <span class="caret"></span>';
}

$(document).ready(function () {

    $('#arrivalPicker').datepicker({
        format: 'dd-mm-yyyy',
        autoclose: true,
        startDate: new Date()
    }).on('changeDate', function (e) {
        $('#departurePicker').datepicker('setStartDate', e.date);
    });

    $('#departurePicker').datepicker({
        format: 'dd-mm-yyyy',
        autoclose: true,
        startDate: new Date()
    });

});

