const WHATSAPP_NUMBER = "919785770641";

/* JEWELLERY ENQUIRY */

function enquire(productName) {

    const message =
        "Hello Himanshi Jewellery,%0A%0A" +
        "I am interested in:%0A" +
        encodeURIComponent(productName) +
        "%0A%0A" +
        "Please send me the price, availability " +
        "and complete details.";

    const url =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        message;

    window.open(url, "_blank");
}


/* CONTACT WHATSAPP */

function contactWhatsApp() {

    const message =
        "Hello Himanshi Jewellery,%0A%0A" +
        "I would like to know more about your jewellery collection.";

    const url =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        message;

    window.open(url, "_blank");
}


/* PAGE LOAD MESSAGE */

document.addEventListener("DOMContentLoaded", function() {

    console.log(
        "Welcome to Himanshi Jewellery"
    );

});
