let total_qty = 398
let gradeUrls = function (url, qty) {
    let cur_qty = qty * 100 / total_qty
    let grade = ''
    if (cur_qty >= 90) {
        grade = 'A'
    } else if (cur_qty >= 75) {
        grade = 'B'
    } else if (cur_qty >= 50) {
        grade = 'C'
    } else {
        grade = 'D'
    }
    return `${url} has ${grade} (${cur_qty}%)`
}
let res = gradeUrls('https://rinova.ru/catalog/avtonomnye_ustanovki_pozharotusheniya/', 391)
console.log(res)