let name = prompt("Ismingizni kiriting")
let years = +prompt("Hozir nechanchi yil")
let old = +prompt("Nechchinchi yilda tug'ilgansiz")
if (!isNaN(name)) {
    alert("ishmingizni to'g'ri kiriting")
}
else if(isNaN(name) && !isNaN(years && old)){
    alert("Yoshingizni bilish uchun consoleni oching")
    console.log(`${name} yoshingiz ${years-old} `);

}
else(
    alert("Nimadur hato ketdi!")
)

