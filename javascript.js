function somar() {
    var tn1 = document.querySelector('.txt1')
    var tn2 = document.querySelector('#txt2')
    var res = document.querySelector('.res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    var nom = document.querySelector('#nome1')
    var nom2 = document.querySelector('#nome2')
    var nam = nom.value
    var nam2 = nom2.value
    var nam3 = document.querySelector('.nam3')
    var mult = n1 * n2
    nam3.innerHTML = `Olá ${nam} and ${nam2} and ${mult}`
    res.innerHTML = `Olá ${nam} and ${nam2}, seu cálculo é a soma entre ${n1} e ${n2} é igual a ${s}`
}

var btn = document.querySelector('.btn')
btn.addEventListener('click',somar) 



