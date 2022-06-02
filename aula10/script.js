//match() método match procura uma palavra dentro de uma string
// g/i/m    g=global(analisa tudo)  i=case sensitive(não diferenciar caixa alta e baixa)   m=retorna string

// let nome = "Jean Carlo Polonio";

// console.log( nome.match('o') ); //retorna a posição do 1o elemento encontrado na string


//search()  procura pela ocorrencia retornando a posição na cadeia da string

// console.log( nome.search('o') );

// console.log( nome.search(/j/i))

// console.log( nome[0]);



//replace() Método que substitiu uma string por outra

// let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus debitis autem tenetur? Alias quis, asperiores quas molestias, exercitationem cupiditate ipsa numquam facere reiciendis nemo earum qui eaque dicta? Minus, consequatur?'

// let strOutra = str.replace(/i/gi, 'y');  // troca todas as letras i por y independente de maiuscula e minuscula e em todas strings

// console.log(strOutra);


//localeCompare() compara entre duas strings

// let gato = "gato";
// let outoGato = "gato";

// console.log(gato.localeCompare(/Gato/gi)); ///retorna 0 quando é igual

//toString() O uso da toStribg converte um valor qualquer em uma string

// let num = Number('10');
// console.log(num);
// console.log(num.toString());

//toLowerCase() Faz a conversão de uma string inteira para caracteres maísculos (caixa alta)
//toUpperCase() Transforma em maiusculo

// let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus debitis autem tenetur? Alias quis, asperiores quas molestias, exercitationem cupiditate ipsa numquam facere reiciendis nemo earum qui eaque dicta? Minus, consequatur?'

// console.log(str.toUpperCase()); // converte para Maisucula
// console.log(str.toLowerCase()); // converte tudo pra minuscula

//trim() Remove espaços antes e depois da string especificada
// let str1 = "         Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus debitis autem tenetur? Alias quis, asperiores quas molestias, exercitationem cupiditate ipsa numquam facere reiciendis nemo earum qui eaque dicta? Minus, consequatur?"

// console.log(str1.trim());

// let str2 = "                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus debitis autem tenetur? Alias quis, asperiores quas molestias, exercitationem cupiditate ipsa numquam facere reiciendis nemo earum qui eaque dicta? Minus, consequatur?"

// console.log(str2); 

//NaN   = Not as Number
//Quando uma string for passada para number(), parseInt ou parseFloat()
// isNaN = true
// !isNaN = false

// let num = Number("1"); // sempre usar o Number para que converta string em numero

//toFixed() Arredonda numero com casas decimais

let valor = 2.456789;
console.log(valor.toFixed(2));

//toLocaleString()
//retorna uma string com uma representação de moeda definida como parametro currency.
// toLocaleString('pt-BR', {style: ' currency: 'BRL'})

console.log(valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))









