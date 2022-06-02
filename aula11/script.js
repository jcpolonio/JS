// function Pessoa(nome){

//     this.nome = nome;

//     this.msg = function(){
//         alert("Olá!!!!!");
//     }

// }

// let NovaPessoa = new Pessoa("José");

// // NovaPessoa.msg();
// // console.log(NovaPessoa.nome);

// console.log(NovaPessoa);

/////////////////////////////////////////////////////////////////////
// let Pessoa2 = {
//     'nome':'',
//     'idade':''
// }

// Pessoa2.__proto__.msg = function(){
//     alert("Olá " + Pessoa2.nome);
// }

// let P = Pessoa2;
// P.nome = "Jean";
// P.msg();
// console.log(P);
/////////////////////////////////////////////////////////////////////////

let Pessoa3 = [
    {
        'nome':'Jean',
        'idade': '47',
        'sexo': 'M'
    },
    {
        'nome':'Leticia',
        'idade': '44',
        'sexo': 'F'
    },
    {
        'nome':'João',
        'idade': '35',
        'sexo': 'M'
    },
]

let NPessoa = Pessoa3;

console.log(`Existem ${NPessoa.length} pessoas cadastradas`)
console.log(NPessoa[0].nome);


