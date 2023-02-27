// LISTA DE EXERCÍCIOS DE ALGORITMOS CONDICIONAIS

// QUESTÃO 3: Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar.

let numero = prompt("Digite um valor:"); //Aqui eu criei uma variavel chamada número que vai rebecer um valor do usuário através do comando prompt, esse comando vai aparecer na tela do navegador do usuário e assim ele poderá digitar qualquer valor que desejar.
let valor = numero % 2; //Depois criei uma variavel chamada valor, essa variavel vai rebecer o número que o usuário digitou anteriormente (lá no prompt) e vai dividir esse número por 2.
 if (numero % 2 == 0) { //Então, se o número que o usuário digitou ao ser dividido por 2, o resto da divisão for igual a 0, isso quer dizer que o número é par. Por isso, criei o if (se). 
    alert ("O número é par"); //Pois caso a condição acima seja verdadeira, então vai aparecer uma mensagem no navegador informando que o numero digitado é par.
}
 else if (numero % 2 == 1) { //Se o número que o usuário digitou ao ser dividido por 2, o resto da sua divisão for igual a 1, então esse número é par. Por isso usei o else, porque caso a condição não seja a que foi definida no if, então a condição do else if  que será a verdadeira.
    alert ("O número é ímpar") //Então, no navegador do usuário aparecerá a mensagem informando que o valor é ímpar.
}










