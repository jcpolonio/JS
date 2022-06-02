function valorImc(){
Nome = prompt("Digite seu nome:")
Altura = prompt("Digite sua altura (metro):")
Peso = prompt("Digite seu peso (kg):")

imc = (Peso / (Altura * Altura))
return imc;

}

alert("Seu IMC é =" + valorImc())
