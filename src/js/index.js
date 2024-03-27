const botoes = document.querySelectorAll('.botao')

const fundos = document.querySelectorAll('.fundo')

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        const botaoSelecionado = document.querySelector('.selecionado')
        botaoSelecionado.classList.remove('selecionado')

        botao.classList.add('selecionado')

const fundoAtivo = document.querySelector('.ativo')
fundoAtivo.classList.remove('ativo')

fundos[indice].classList.add('ativo')
    })
})