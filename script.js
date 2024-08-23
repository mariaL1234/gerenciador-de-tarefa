const nomeTarefaInput = document.getElementById("nomeTarefa")
const tempoTarefaInput = document.getElementById("tempoTarefa")
const mensagem = document.getElementById("mensagem")
const botaoAdicionar = document.getElementById("botaoAdicionar")

async function gerenciarTarefa(nome, tempo){
    mensagem.textContent = `A tarefa ${nome} esta em andamento`

    await new Promise((resolve)=>{
        setTimeout(resolve, tempo*1000)
    })

    mensagem.textContent = `Tarefa ${nome} concluida`
}

botaoAdicionar.addEventListener("click", function(){
    const nomeTarefa = nomeTarefaInput.value
    const tempoTarefa = Number(tempoTarefaInput.value)

    if(nomeTarefa.trim() !==""){
        gerenciarTarefa(nomeTarefa,tempoTarefa)
        nomeTarefaInput.value = ""
        tempoTarefaInput.value = ""
    }
    else{
        mensagem.textContent = "Por favor,preeencha todos  os campos corretamente."
    }
})