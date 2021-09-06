const title = document.querySelector('#titulo');
const texto = document.querySelector('p')
const img = document.getElementById('imagem');
const nav = document.querySelector('nav');
const card = document.querySelector('.info')
const back = document.querySelector('body')
const data = document.querySelector('#data')
data.classList.add('hidden')



$('#date').change(function() {
    apod('date')
})
$('#data').change(function() {
    apod('data')
})

function apod(id){
    let result =  document.getElementById(id).value;
    let link = `https://api.nasa.gov/planetary/apod?api_key=gb8N4ADtCncjCg2CPLeJY1nqhQZ0Tch7jbP4T1Yy&date=${result}`
    let resposta = null
    $.ajax({
        url: link,
        type: 'GET',
        dataType: 'json',
        success: function(result){
            resposta = result
            title.innerText = resposta.title
            texto.innerHTML = resposta.explanation
            img.src = resposta.url
            nav.style.display = 'none'
            back.style.background = '#000'
            card.classList.remove('hidden')
            data.classList.remove('hidden')
        }
    })
}
