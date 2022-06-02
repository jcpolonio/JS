function listaArray(){
        let listaDeNomes = ["Maria", "Adriana", "Leticia", "Cleide", "Luciana", "Patricia"];

        document.write(`Quantidade de elementos do array....:`,listaDeNomes.length);
        let indice = prompt("Digite o indice a pesquisar: ");
        document.write(`<br>Você escolheu o índice ${indice} que é o elemento ${listaDeNomes[indice]}`);
        let nomeNovo = prompt("Digite o nome a ser inserido na lista: ");
        listaDeNomes.push(nomeNovo);
        document.write(`<br>A quantidade atual de elementos do array é de....: ${listaDeNomes.length}`);

        // document.write(listaDeNomes);

    
}

listaArray();