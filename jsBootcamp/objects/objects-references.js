let myAccount = {
    name: 'John Doe',
    expense: 0,
    income: 0
}

let otherAccount = myAccount
//otherAccount.income = 1000
//otherAccount = {}

let addExpense = function(account, amount){
    account.expense = account.expense + amount
    /* account = {}
    console.log(account) */
}

//addIncome()
let addIncome = function(account, income){
    account.income = account.income + income
}

//resetAccount()
let resetAccount = function(account){
    account.expense = 0
    account.income = 0
}

//getAccountSummary
let getAccountSummary = function(account){
    let balance = account.income - account.expense
    return `Account for ${account.name} has a $${balance}. $${account.income} in income. $${account.expense} in expenses.`
}

//addExpense(myAccount, 2.50)
addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))