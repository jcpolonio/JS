// MÉTODO COM TEMPLATE STRING - USAR ESTE MÉTODO!
// let str = `Apenas um teste!`
// let str2 = `Mais um teste ${str}`

// metodo sem o TEMPLATE STRING
// let str = "1,2,3, Testando!!!!!!!";
// let str2 = `Bla Bla Bla...e Bla Bla Bla ` + str;

// console.log(str2);


//ARRAYS E COLEÇÃO DE DADOS######################################################################################

// const frutas = ["Banana", "Uva", "Manga", "Morango"]; //array de 4 elementos - inicia-se o indice em ZERO.

// let favorito = `A fruta que eu mais gosto é ${frutas[0]}`;

// console.log(favorito);

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);

//OUTRO EXEMPLO DE ARRAY ##################################################################################################

const Pessoa = [
    "José",
    23,
    "solteiro",
    "Bola",
    1.70,
    cores = ["azul", "amarelo", "verde", "laranja"] //posição 5 - array dentro de outro
];

let key = 0;
key++;

console.log(Pessoa.length); //retorna o tamanho do Array
console.log(cores.length); //retorna o tamanho do Array
console.log(`Jean Carlo Polonio`.length); //retorna o tamanho de uma string
console.log(`Jean Carlo Polonio`[0]); //retorna o elemento da posição

console.log(Pessoa[5][key]); // array bi-dimensional

// (function(P){
//     const jose = `Meu nome é ${Pessoa[0]} eu tenho ${Pessoa[1]} anos e sou ${Pessoa[2]} , também gosto de jogar ${Pessoa[3]}. Minha altura é ${Pessoa[4]} metros`;
//     alert(jose);
// })(Pessoa)


