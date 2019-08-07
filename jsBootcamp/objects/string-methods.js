let name = " Andrew Mead New   "
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())

let password = 'abc143@malksdk.ruu'
console.log(password.includes('malk'))
console.log(name.trim())

let isValidPassword = function(password){
    return(password.length>8 && !password.includes('password'))
}


console.log(isValidPassword('asdff'))
console.log(isValidPassword('abac1234@$#@#$'))
console.log(isValidPassword('asdfsdfoijwerjpassword'))