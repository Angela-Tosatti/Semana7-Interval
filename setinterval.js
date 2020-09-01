// 2 - Crie uma página web para um teste de matemática. Ao clicar em um botão, é exibido uma questão de matemática qualquer, e abaixo dela, três opções de respostas, sendo que apenas uma é a correta. O usuário tem apenas 10 segundos para responder, caso contrário, é exibido uma mensagem na tela informando que o tempo acabou;

const pergunta = document.getElementById('inicioTeste')

const btnIniciar = document.getElementById('btnIniciar').addEventListener

('click', function () {
    pergunta.innerHTML = "<div id='pergunta'><form name='frm'><h3>Quanto é 2 + 2?</h3><br><input type='radio' name='rad' value='5'>A) 5<br><input type='radio' name='rad' value='4'>B) 4<br><input type='radio' name='rad' value='22'>C) 22<br><input type='button' id='btnConfirmar' value='CONFIRMAR'><form></div>"
    verifica();

    setTimeout(() => {
        pergunta.innerHTML = "<h1>O seu tempo acabou!</h1><br><h1>Tente Novamente!</h1>"
    }, 10000)

})

function verifica() {
    const btnConfirmar = document.getElementById("btnConfirmar").addEventListener('click', function () {
        var formulario = document.frm.rad
        for (let i = 0; i < formulario.length; i++) {
            if (formulario[i].checked) {
                if (formulario[i].value == 4) {
                    pergunta.innerHTML = "<img src='correto.png'><br><h1>Parabéns!! Você Acertou!!</h1>"
                } else {
                    pergunta.innerHTML = "<img src='errado.png'><br><h1>Errado!! Tente Novamente!!</h1>"
                }
            }
        }
    })
}