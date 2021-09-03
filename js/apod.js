const title = document.querySelector('#titulo');
const texto = document.querySelector('p')
const img = document.getElementById('imagem');
const hidden = document.querySelector('.card');
const card = document.querySelector('.container')


$('#btn').click(function() {
    let result =  document.getElementById("date").value;
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
            hidden.style.display = 'none'
            card.classList.remove('hidden')

        }
    })


})


