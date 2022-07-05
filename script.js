// Primeira parte pegar dados de dois usuarios e comparar as idades deles
//INICIO
// let nomes = [];
// let idades = [];

// for (let contador=0; contador <=1; contador++){
//     let nome = prompt("Digite seu nome");
//     nomes.push(nome);
//     let idade = Number(prompt("Digite sua idade")); 
//     idades.push(idade);     
// }
// if(idades[0] > idades[1]){
//     console.log(`${nomes[0]} é mas velho do que ${nomes[1]}`)
// }else{
//     console.log(`${nomes[1]} é mas velho do que ${nomes[0]}`)
// }
//FIM

//Segunda parte trabalhando com objetos e arrays
//INICIO
let confirmar = confirm('Você Deseja adicionar um registro?') //pergunta para o usuario inicialmente se deseja adicionar um registro usaremos para inicializar nosso while, pode ter dois valores, true ou false;
let pessoas = []; //array para almacenar os objetos criados

function Pessoa(nome,idade){ // função construtora aqui definiremos a estrutura de nosso objeto e os parametros que deve ter
    this.nome = nome;
    this.idade = idade;
}

while(confirmar){ // com a ajuda do while faremos um loop para coletar os dados do usuario 
    let nome = prompt('Escreva seu nome') //pegamos o valor do nome escrito pelo usuario
    let idade = Number(prompt('Qual é sua idade?')) //pegamos o valor da idade escrito pelo usuario e convertemos em numero
    let pessoa = new Pessoa(nome,idade) // criamos um novo apontamento do objeto pessoa com os dados dado pelo usario;
    pessoas.push(pessoa); // enviamos esse objeto para uma lista;
    confirmar = confirm('Você Deseja adicionar outro registro?'); //sempre que nosso usuario diga ok nossa variavél confirmar será true e o loop continua, ao usuario clickar em cancel confirmar é false e sai do loop
}

function calcularPessoaMaisVelha(pessoa){
    pessoa.sort(function(a, b) // o sort funciona para ordenar listas, só serve para strings mas usando essa função conseguimos fazer que ordene numeros támbem, dessa vez de menor a maior;
    {
        return a.idade - b.idade
    });
    
    let resultado = pessoa[pessoa.length - 1]; // pegamos o último elemento de nosso array já ordenado de menor a maior, por ser o último elemento quer dizer que estamos escolhendo o valor maior ou a pessoa mais velha da lista;
    return resultado;
}

function calcularPessoaMaisJovem(pessoa){
    pessoa.sort(function(a, b) // o sort funciona para ordenar listas, só serve para strings mas usando essa função conseguimos fazer que ordene numeros támbem, dessa vez de maior a menor;
    {
        return b.idade - a.idade
    });
    
    let resultado = pessoa[pessoa.length - 1]; // pegamos o último elemento de nosso array já ordenado de maior a menor, por ser o último elemento quer dizer que estamos escolhendo o valor menor ou a pessoa mais jovem da lista;
    return resultado;
}

function MostrarTodosOsRegistros(pessoa){ //função para mostrar todos os dados de nossa lista
  console.table(pessoa)
}

function MostrarPessoaMaisVelha() { // função para mostrar a pessoa mais velha da lista
     let pessoaMaisVelha = calcularPessoaMaisVelha(pessoas); // chamamos nossa função criada anteriormente
     console.log(`A pessoa mais velha é: ${pessoaMaisVelha.nome} com ${pessoaMaisVelha.idade} anos`); // criamos uma mensagem personalizada para mostrar os dados
     return 
  }

  function MostrarPessoaMaisJovem() {
    let pessoaMaisJovem = calcularPessoaMaisJovem(pessoas); // chamamos nossa função criada anteriormente
    console.log(`A pessoa mais jovem é: ${pessoaMaisJovem.nome} com ${pessoaMaisJovem.idade} anos`);// criamos uma mensagem personalizada para mostrar os dados
    return
 }
 //vamos chamar as funções para mostrar os dados no console.
 pessoas.forEach(MostrarTodosOsRegistros);
 MostrarPessoaMaisVelha();
 MostrarPessoaMaisJovem();

//FIM


