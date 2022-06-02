
////WHILE - percorre enquanto a condição for verdadeira

// let loop=0;
// let cores = ["amarelo", "verde", "branco", "azul"]

// while( loop < cores.length){
//     console.log(cores[loop]);
//     loop++;
// }


/// DO WHILE

// do {
//     teste = Number(prompt("Digite 0 para sair"));

//         switch(teste){
//             case 0:
//                 alert("Saindo do sistema");
//                 break;
//             case 1:
//                 alert("Cadatsrando");
//             break;
//             case 2:
//                 alert("Consultando");
//                 break;
//             default:
//                 alert("Opção inválida");
//                 break;
//         }

// } while (teste != 0 )


///////////////////////EXERCÍCIO 

let frutas = [
    {fruta: "Banana", preco: 3.49},
    {fruta: "Uva", preco: 7.99},
]



function listaFrutas(f){

    for( let produto of f){
        for(let p in produto){
            console.log(`${p} -> ${produto[p]}`);
        }
    }
}

function precoTotal(valor){

    for( let produto of valor){
        for(let p in produto){
            total = Number(produto[1]) + Number(produto[1]);
            console.log(`O valor total dos produtos = ${total[valor]}`);
        }
    }
}
listaFrutas( frutas );

precoTotal( frutas );
