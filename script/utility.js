
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
