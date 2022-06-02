//concat() junta dois ou mais arrays

// let nomes = ["José", "Antonio", "Mario", "Pedro"];
// let nomes2 = ["Maria", "Adriana", "Leticia", "Cleide", "Luciana", "Patricia"];

// let TodosOsNomes = nomes.concat(nomes2);

// console.log(TodosOsNomes);
// let qtdArrayNome = `O array nomes possui ${TodosOsNomes.length} elemesntos`;
// console.log(qtdArrayNome);



// indexOf() Procura um determinado elemento de um array, retorna uma posição
//              0         1          2          3         4           5
// let nomes2 = ["Maria", "Adriana", "Leticia", "Cleide", "Luciana", "Patricia"];
// console.log(nomes2.indexOf("Leticia"));
// console.log(nomes2.indexOf("Pedro")); // quando não existe retorna -1

// Buscar um nome na lista e retornar a posição e se encontrou ou não
// let nomes2 = ["Maria", "Adriana", "Leticia", "Cleide", "Luciana", "Patricia"];
// buscaNome = prompt("Digite o nome");
// if( nomes2.indexOf(buscaNome) != (-1) ){
//     alert(`Eu encontrei na lista o nome ${buscaNome} e está na posição ${nomes2.indexOf(buscaNome)}`);
// } else{
//     alert(`Não encontrei na lista o nome ${buscaNome}`);
// }

// join() Transforma elementos de um array em uma string

// let nomes2 = ["Maria", "Adriana", "Leticia", "Cleide", "Luciana", "Patricia"];
// console.log(nomes2);
// console.log(nomes2.join());


// Push() Insere elementos no fim do ARRAY

// let frutas = new Array();
// frutas.push("Maça", "Laranja");
// frutas.push("Morango", "Maracujá");

// console.log(frutas);


// Pop() Remove o último elemento de um Array

// let nomes2 = ["Maria", "Adriana", "Leticia", "Cleide", "Luciana", "Patricia"];
// console.log(nomes2);
// nomes2.pop();
// console.log(nomes2);



// reverse() Inverte a ordem dos elemensto de um Array

// let nomes2 = ["Maria", "Adriana", "Leticia", "Cleide", "Luciana", "Patricia"];
// console.log(nomes2);
// nomes2.reverse();
// console.log(nomes2);


//shift() Remove o primeiro elemento de um array

// let nomes2 = ["Maria", "Adriana", "Leticia", "Cleide", "Luciana", "Patricia"];
// console.log(nomes2);
// nomes2.shift();
// console.log(nomes2);


//unShift() Insere um elemento no inicio do Array

//sort() Ordena elementos de um arrey em ordem crescente

// let numeros = [200, 23, 190, 1002, 3, 201, 300, 5];
// let alfa = ["v", "a", "d", "k", "c"]
// alfa.sort();
// console.log(alfa);

//toString() Converte um Array em uma string e retorna esta string

//splice() corta ou remove um elemento de um array em um ponto indicado

let nomes = ["Maria", "Adriana", "Leticia", "Cleide", "Luciana", "Patricia"];
console.log(nomes);
let novaLista = nomes.splice(3,1);
console.log(novaLista);
console.log(nomes);

