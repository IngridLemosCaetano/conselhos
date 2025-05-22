let botao = document.getElementById('conselho')
let conselhoGerado = document.getElementById('conselho-gerado')

botao.addEventListener('click',function(event){
    event.preventDefault()

    fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((data) => {
        conselhoGerado.innerText = data.slip.advice
    })
})