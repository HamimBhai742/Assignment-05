const busSeats = document.getElementsByClassName('bus-seat')
console.log(busSeats);
let count = 0;
let totalPrice = 0;
for (const busSeat of busSeats) {
    // console.log(busSeat.classList);
    busSeat.addEventListener('click', function (event) {

        if (count > 3) {
            alert('You cannot buy any more tickets')
            return 'You cannot buy any more tickets'

        }
        // console.log(busSeat);

        busSeat.setAttribute('disabled',true)

        const busSeatClassList = busSeat.classList
        busSeatClassList.remove('bg-[#F7F8F8]')
        busSeatClassList.remove('text-[#03071280]')

        busSeatClassList.add('bg-[#1DD100]')
        busSeatClassList.add('text-[#FFF]')

        let busSeatName = busSeat.innerText
        // console.log(busSeatName);

        count = count + 1;
        countTicket('count-buy-ticket')
        // buyTicektList('buy-ticket-list')


        const buyTicekts = document.getElementById('buy-ticket-list')
        const buyTicket = document.createElement('div')
        const p1 = document.createElement('p')
        p1.innerText = busSeatName
        buyTicket.appendChild(p1)
        const p2 = document.createElement('p')
        p2.innerText = 'Economoy'
        buyTicket.appendChild(p2)
        const p3 = document.createElement('p')
        p3.innerText = 550
        buyTicket.appendChild(p3)

        buyTicekts.appendChild(buyTicket)
        // console.log(buyTicekts);

        const buyTicketListclass = buyTicket.classList
        buyTicketListclass.add('text-[#03071299]')
        buyTicketListclass.add('font-inter')
        buyTicketListclass.add('flex')
        buyTicketListclass.add('justify-between')


        const perTicket = p3.innerText
        const perTicketPrice = parseInt(perTicket)
        totalPrice += perTicketPrice;
        // console.log(totalPrice);
        setTicketPrice('total-price')
        setTicketPrice('grand-total')

        const leftSeat = document.getElementById('left-seat')
        const leftseatNum = leftSeat.innerText
        const leftSeatNumber = parseInt(leftseatNum)
        const totalLeftSeat = leftSeatNumber - 1;
        leftSeat.innerText = totalLeftSeat;
        // console.log(totalLeftSeat);
    })
}


const inputCupon = document.getElementById('input-cupon')
inputCupon.addEventListener('keyup', function () {

    const events = event.target.value.split('').length

    // console.log(events1);
    if (events > 0) {
        enableBtn('enabled-btn')

    }
})

function applyBtn() {
    // const apply = document.getElementById('enabled-btn').classList
    const inputCupon = document.getElementById('input-cupon')
    const cuponEvent = inputCupon.value.split(' ').join('').toLowerCase()
    // const events1 = event.target.value.split(' ').join('').toLowerCase()
    console.log(cuponEvent);
    if (cuponEvent === 'new15') {
        const discountPrice = totalPrice * 0.15;
        grandTotalPrice = totalPrice - discountPrice;
        setGrandPrice('grand-total')
        addClassById('input-cupon')
        addClassById('enabled-btn')
        // console.log(grandTotalPrice);
    }
    else if (cuponEvent === 'couple20') {
        const discountPrice = totalPrice * 0.20;
        grandTotalPrice = totalPrice - discountPrice;
        // console.log(grandTotalPrice);
        setGrandPrice('grand-total')
        addClassById('input-cupon')
        addClassById('enabled-btn')
    }
    else {
        alert('Invalid Cupon Code')
    }

}


document.addEventListener('keyup', function () {
    const passenger1 = document.getElementById('passenger-info')
    const passengerFroms1 = passenger1.value.split('').length
    const passenger2 = document.getElementById('number-info')
    const passengerFroms2 = passenger2.value.split('').length
    // const passenger3 = document.getElementById('email-info')
    // const passengerFroms3 = passenger3.value.split('').length
    if (count > 0 && passengerFroms1 > 0 && passengerFroms2 > 0) {
        enableBtn('enabled-btn-2')
    }
})


const nextBtn = document.getElementById('enabled-btn-2')
nextBtn.addEventListener('click', function () {
    const passenger2 = document.getElementById('number-info')
    const passengerFroms2 = passenger2.value.split('').length
    if (passengerFroms2 === 11){
        const modals=document.getElementById('modal')
        modals.classList.remove('hidden')
    }
    else{
        alert('Please enter your valid 11 digit number')
    }
})

const continueModal=document.getElementById('continue-modal')
continueModal.addEventListener('click',function(){
    window.location.reload()
})
