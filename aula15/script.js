



// let m = 'Laranja';
// let n = 1000;

// console.log( typeof m);
// console.log( typeof n);

///////compara se o dado informado é um NUMBER //////////////////
// var m = prompt('Digite um dado:')
// console.log(typeof m);
// if (typeof m === 'number'){
//     console.log(`O dado informado ${m} é um number`);
// }else {
//     console.log(`O dado informado ${m} não é um number`);
// }

//////MANIPULANDO UM BOTÃO //////////////////////
// window.onload=function(){
//     //alert("Olá povo brasileiro");

//     const botao = document.getElementById('btn');
//     const txtBox = document.querySelector("#txtBox");
//     const caixa = document.querySelector("#caixa");

//     console.log(botao);
//     botao.addEventListener( 'click' , function(){
//         caixa.innerHTML += ' ' + txtBox.value + ' ';
//         txtBox.value = ' ';
        
//         // alert("FUI CLICADO!!!!");
//         // alert(botao.value);
//         // alert(botao.name);
//         // alert(txtBox.value);

//     })

// }


/////// TABUADA ////////
window.onload=function(){
function tabuada(numero){

    let tabuada=1;
    console.log(`Tabuada do ${numero}`);
    if(typeof numero !== 'number'){
        alert("Digite um valor númerico váçido");
    } else{
        if(numero <1 || numero >10 ){
            alert("Digite um valor entre 1 e 10")
        } else {
         
            while(tabuada <= 10){
                
                console.log( `${numero} X ${tabuada} = ${numero * tabuada}` );
                tabuada++;
            }
        }

    
    }}
tabuada(7);
}
