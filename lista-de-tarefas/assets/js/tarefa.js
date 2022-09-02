const novaTarefa = document.querySelector('[data-form-button]')
//criando o evento de clique
novaTarefa.addEventListener('click',(evento) =>{
    evento.preventDefault()
    //pegando o input do HTML
    const input = document.querySelector('[data-form-input]')
    const lista = document.querySelector('[data-list]')
    //pegando o valor de input (o que o usuário vai digitar)
    const valor = input.value
    //apagando a mensagem do input
    //criando o elemento li
    const tarefa = document.createElement('li')
    //colocando um efeito CSS no meu texto
    tarefa.classList.add('task')
    //colocando a variavel valor denteo de conteudo
    const conteudo = `<p class="content">${valor}</p>`
    tarefa.innerHTML = conteudo

    tarefa.appendChild(botao())
    

    lista.appendChild(tarefa)
    input.value = ""
})
//criando o botão
const botao = () =>{
    //criando o elemento botão
    const botaoConclui = document.createElement('button')
    
    botaoConclui.innerHTML = 'concluir'
    //criando o evento de clique no botão

    //criando o evento de clique para o botão
    botaoConclui.addEventListener('click',() =>{
        console.log("Fui clicado!")
    })

    return botaoConclui
}
