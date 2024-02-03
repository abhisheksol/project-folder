function pdfgenerator() {
    var element = document.getElementById('convert');

    html2pdf().from(element).save();
} // he generator ahe html2pdf




// function redirectToNextPage() {
//     // Set the URL of the next HTML page
//     const nextPageUrl = "recipt.html";

//     // Redirect to the next page
//     window.location.href = nextPageUrl;
// }