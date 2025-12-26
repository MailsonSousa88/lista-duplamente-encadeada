import { ListaDuplamenteEncadeada } from './listaDuplamenteEnca';

const lista = new ListaDuplamenteEncadeada();
console.log("TESTE EXEMPLAR");

// TESTE BÁSICO PARA ENTENDER O FUNCIONAMENTO DA LISTA
console.log("Adicionando no início...");
lista.adicionarNoInicio(20);
lista.adicionarNoInicio(10);

console.log("Adicionando no fim...");
lista.adicionarNoFim(30);
lista.adicionarNoFim(40);

console.log("Estado atual (início → fim):");
console.log(lista.exibirInicioAoFim());
console.log("Estado atual (fim → início):");
console.log(lista.exibirFimAoInicio());