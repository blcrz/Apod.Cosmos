const title = document.querySelector('#titulo');
const texto = document.querySelector('p')
const nav = document.querySelector('nav');
const card = document.querySelector('.info')
const back = document.querySelector('body')
const data = document.querySelector('#data')
const midia = document.querySelector('.photo')
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
    let load = document.querySelector('.loading')
    load.style.display = 'block'

    $.ajax({
        url: link,
        type: 'GET',
        dataType: 'json',
            success: function(result){

            resposta = result
            title.innerText = resposta.title
            texto.innerHTML = resposta.explanation
            nav.classList.add('hidden')
            back.style.background = '#000'
            card.classList.remove('hidden')
            data.classList.remove('hidden')
            load.style.display = 'none'

            if(resposta.media_type === 'image'){
                const img = document.createElement('img')
                img.id = 'imagem'
                img.src = resposta.url
                midia.innerHTML = img.outerHTML
            }else if(resposta.media_type === 'video'){
                const video = document.createElement('iframe')
                video.id = 'video'
                video.src = resposta.url
                midia.innerHTML = video.outerHTML
            }
        },
        error: function(){
            alert('Ops! Selecione uma nova data que corresponda até o dia atual')
            load.style.display = 'none'
        }
    })
}
