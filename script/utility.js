// function setLeftSeats(elementId, leftSeat) {
//     const setaLeft = document.getElementById(elementId)
//     setaLeft.innerText=leftSeat;
//     console.log(setaLeft);
// }
function countTicket(elementId) {
    const ticketCount = document.getElementById(elementId)
    ticketCount.innerText = count;
}


function setTicketPrice(elementId) {
    const ticketPrice = document.getElementById(elementId)
    ticketPrice.innerText = totalPrice;
}


function enableBtn(elementId) {
    const enable = document.getElementById(elementId)
    enable.removeAttribute('disabled')
}

function setGrandPrice(elementId) {
    const grandPrice = document.getElementById(elementId)
    grandPrice.innerText = grandTotalPrice;
}

function addClassById(elementId) {
    const element1 = document.getElementById(elementId)
    const element2 = element1.classList
    element2.add('hidden')
    console.log(element2);
}

// function inputFrom(elementId){
//     const inputFrom=document.getElementById(elementId)
//     const inputFromCheak=inputFrom.target.value
//     console.log(inputFromCheak);
// }
function buyTicektList(elementId) {
    // const buyTicekt=document.getElementById(elementId)
    // const p=document.createElement('p')
    // p.innerText=busSeatName
    // buyTicekt.appendChild(p)
    // // p.innerText=busSeatName;
    // // buyTicekt.appendChild(p)
    // // console.log(buyTicekt);
    // console.log(buyTicekt);
}