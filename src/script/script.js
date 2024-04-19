function verItens(){
    const url = `http://localhost:8080/AdegaEstoque/item`
    let temp = "";
    let lista = document.getElementById("lista-itens");


fetch(url)
    .then(resposta =>{ 
    // console.log(resposta); 
    return resposta.json();
    })
    .then(dados =>{
        console.log(dados)

        for(i = 0; i < dados.length; i++){
            temp += "<li>" + dados[i].nome + "</li>"
        }   

        lista.innerHTML = temp;
        temp = "";
    })
    .catch(erro => {
        console.log(erro)
    })
}


function addItem(){
    let url = 'http://localhost:8080/AdegaEstoque/item';
    
    let nome = document.getElementById('txtNome').value;
    let preco = document.getElementById('txtPreco').value;
    let quantidade = document.getElementById('txtQuantidade').value;

    let body = {
        [0]: {
            "nome": nome,
            "preco": preco,
            "quantidade": quantidade
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers:{
            'Content-Type':'application/json'
        }
    })
        .then((response) => response.json())
        .then(json => {
            // Do something with object
            // console.log(json.);
        });
        
}