

palavra = 'Palmeiras';

(function(){

    document.write(`Esta palavra tem ${palavra.length} caracteres <br>`); // retorna o tamanho da string
    document.write(`Esta palavra ${palavra} em maísculo ficou ${palavra.toUpperCase()} <br>`); //converte para maiscula
    document.write(`A letra '${palavra[2]}' é o 3o. caráctere <br>`); // retorna um caractere de acordo com a posição
    document.write(`${palavra} ficou ${palavra.replace(palavra[3], 'X')}`); // substitui um caracter por outro indicado na posição

})(palavra)