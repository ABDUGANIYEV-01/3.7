var formaElement = document.getElementById('forma')
var somElement = document.getElementById('som')
var kursElement = document.getElementById('kurs')
var natijaElement = document.getElementById('natija')

formaElement.addEventListener('submit', function(event){
    event.preventDefault()
    console.log("forma jonatishga urinildi")

    var som = somElement.value
    var kurs = kursElement.value

    if(kurs == "" || kurs == 0){
        kursElement.style.border = "2px solid red" 
        natijaElement.textContent = "notogri qiymat berilgan"
        natijaElement.style.color = "red"
    }else{
        var natija = som/kurs
        natijaElement.textContent = natija
        natijaElement.style.color = "green"
    }
})