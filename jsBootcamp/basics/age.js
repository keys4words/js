let age = 75
let isChild = age <= 7
let isSenior = age >= 65

if(isChild){
    console.log('Child')
}else{
    if (isSenior){
        console.log('Senior')
    }else{
        console.log('Middle')
    }
}

let temp = 100
if (temp >= 60 && temp <= 90){
    console.log("It's pretty nice out")
} else if (temp <= 0 || temp >= 120){
    console.log('Do not outside')
} else {
    console.log('eeh... do what you want')
}

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan){
    console.log('Offer only vegan dishes')
} else if(isGuestOneVegan || isGuestTwoVegan){
    console.log("Offer some vegan dishes")
} else {
    console.log('Offer only standard menu')
}


// console.log(isChild)
// console.log(isSenior)


