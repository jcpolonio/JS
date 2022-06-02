// alert("Função para comparação de números (Maior, menor, igual)")
//       var numero1 = prompt("Digite o 1o. número:");
//       var numero2 = prompt("Digite o 2o. número:");

//       function ComparaNumero (){
//         document.write("Os números digitados são: " + numero1 + " e " + numero2);
//             if(numero1 > numero2){
//                 document.write("<br>" + "O número " + numero1 + " é maior que " + numero2);
//                 }else if(numero1 < numero2){
//                     document.write("<br>" + "O número " + numero2 + " é maior que " + numero1);
//                 }else if(numero1 = numero2){
//                     document.write("<br>" + "O número " + numero2 + " é igual " + numero1);
//                 }
//       }
//     ComparaNumero();


    // function teste(){
    //     let nome = "Jean";
    //     return nome;
    // }

    // console.log(teste());

    // //Função ARROW
    // let msg = ()=>{
    //     alert("Estou feliz da vida com JS");
    // }

    // msg();
    // 
    // 
    // 
    //Função auto-executável

    // (function(produto, preco){
    //     alert("O produto é " + produto + " e o preço é de R$ " + preco);
    // })("Biscoito", 2.35) //utilizar sempre .ponto para casas decimais



    let v2 = prompt("Digite o valor 1: ");
    let v1 = prompt("Digite o valor 2: ");

    const soma = (valor1, valor2)=>{
        // let resultado = parseInt(valor1) + parseInt(valor2);
        // let resultado = parseFloat(valor1) + parseFloat(valor2);
        let resultado = Number(valor1) + Number(valor2);
        console.log(resultado);
    }

    soma(v1, v2);
