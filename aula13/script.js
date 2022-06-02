// let i=5 //var global
// for(let x=0; x <= 10; x++){
//     console.log(`O Valor da interação é ${x} o x mais ele mesmo ${i++}`);
// }

//FOR IN trabalha diretamente com um objeto ////////////////////////////////

// let Pessoas = {
//     nome: "Papai Smurf",
//     idade: 130,
//     personagem: "Lider dos Smurfs",
// }

// for(let propriedades in Pessoas){
//     console.log(Pessoas[propriedades]);
//     console.log(Pessoas.idade);
// }


///FOR OF faz a listagem de ARRAYS///////////////////////////////////////////

// let frutas = ["Melancia", "Banana", "Jaca", "Uva"];

// for(let nomeFruta of frutas){
//     console.log(`O nome da fruta é`,nomeFruta);
// }



// let Herois = [
//     {
//         nome: "Capitão América",
//         identidade: "Steve Rogers",
//     },
//     {
//         nome: "Homen de Ferro",
//         identidade: "Tony Stark",
//     }
// ];

// Herois.push({nome:"Super Homem", identidade:"Clark Kent"});
// Herois.push({nome:"Hulk", identidade:"Dr. Bruce Benner"});

// for(let marvel of Herois){    ////traz os objetos
//     // console.log(marvel);
//     for(let m in marvel){   //////lê os objetos
//         console.log(`${m}: ${marvel[m]}`);

//     }
// }
// let marvel = Herois[1].nome;
// console.log(marvel);



////// EXERCICIO - INVERTER PALAVRA  ///////////////


let palavra = prompt(`Digite um nome`);


function invertePalavra(p){
    for(let i=(palavra.length-1); i >= 0; i--){
        console.log(palavra[p, i]);
    }
}

invertePalavra(palavra);