function pdfgenerator() {
    var element = document.getElementById('convert');

    html2pdf().from(element).save();
} // he generator ahe html2pdf

const form = document.getElementById("movieform");  //form cha id access

form.addEventListener('submit', (e) => {        //java form submit hoto tava
    e.preventDefault();

    const moviename = document.getElementById("movie").value;
    const date = document.getElementById("date").value;               //user na vales ga
    const showtime = document.getElementById("showtime").value;
    const seats = document.getElementById("seats").value;
    const ticket_price = document.getElementById("ticket_price").value;
    const ticket_total = document.getElementById("ticket_total").value;
    const subtotal = document.getElementById("subtotal").value;

    console.log(moviename, date, showtime, ticket_price, seats, "sub: ", subtotal);

    redirectToNextPage(moviename, date, showtime, seats, ticket_price,ticket_total, subtotal);
});

function redirectToNextPage(moviename, date, showtime, seats, ticket_price,ticket_total, subtotal) {
    const nextPageUrl = "recipt.html" +
                       "?moviename1=" + encodeURIComponent(moviename) +
                       "&date=" + encodeURIComponent(date) +
                       "&showtime=" + encodeURIComponent(showtime) +
                       "&seats=" + encodeURIComponent(seats) +
                       "&ticket_price=" + encodeURIComponent(ticket_price) +
                       "&ticket_total=" + encodeURIComponent(ticket_total) +
                       "&subtotal=" + encodeURIComponent(subtotal);

    window.location.href = nextPageUrl;
}


// function redirectToNextPage() {
//     // Set the URL of the next HTML page
//     const nextPageUrl = "recipt.html";

//     // Redirect to the next page
//     window.location.href = nextPageUrl;
// }