const form=document.getElementById("movieform")
// const dateform=document.getElementById("dateform")

// dateform.innerHTML="abhishek is baap of coding"

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const moviename=document.getElementById("movie").value
    const date=document.getElementById("date").value
    const showtime=document.getElementById("showtime").value
    const seats=document.getElementById("seats").value
    const ticket_price=document.getElementById("ticket_price").value
    const subtotal=document.getElementById("subtotal").value

    console.log(moviename , date,  showtime, ticket_price, seats, "sub: ",subtotal);
})






















// // const moviename=document.getElementById("movie").textContent;
// const form=document.getElementById("movieform");

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const moviename=document.getElementById("movie").value;
//     console.log(moviename);
// })
