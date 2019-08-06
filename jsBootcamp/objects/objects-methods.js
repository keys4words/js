let restaraunt = {
    name: "ASB",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize){
        this.guestCount = this.guestCount + partySize
    },
    removeParty(partySize){
        this.guestCount = this.guestCount - partySize
    }
}

restaraunt.seatParty(72)
console.log(restaraunt.checkAvailability(4))
restaraunt.removeParty(5)
console.log(restaraunt.checkAvailability(4))

