# 📘 Lista Duplamente Encadeada em TypeScript

### **Curso:** Análise e Desenvolvimento de Sistemas (ADS) 🖥️
### **Professor(a):** Jonathas Jivago 🧑‍🏫 
### **Aluno:** Francisco Mailson da Silva Sousa 📗 

---

## 📌 Descrição do Projeto

Este repositório contém a implementação de um **Tipo de Dado Abstrato (TDA)** do tipo **Lista Duplamente Encadeada**, desenvolvida em **TypeScript**, conforme solicitado na atividade.

A lista foi implementada **sem uso de Arrays**, listas prontas ou bibliotecas externas, garantindo um encadeamento manual completo, com ponteiros `proximo` e `anterior`.

O projeto inclui:

- Módulos individuais para organização do código
- Arquivo de testes demonstrando todos os métodos
- README estruturado como pedido na atividade

---

## 🧩 Arquivos do Projeto

### **`No.ts`**
Classe responsável por representar cada nó da lista.  
Cada nó contém:
- Um valor numérico
- Ponteiro para o próximo (`proximo`)
- Ponteiro para o anterior (`anterior`)

---

### **`ListaDuplamenteEncadeada.ts`**
Classe principal da estrutura.  
Contém **todos os métodos obrigatórios**:

- `adicionarNoInicio(valor)`
- `adicionarNoFim(valor)`
- `adicionarNaPosicao(valor, posicao)`
- `removerDoInicio()`
- `removerDoFim()`
- `removerDaPosicao(posicao)`
- `buscar(posicao)`
- `buscarValor(valor)`
- `estaVazia()`
- `tamanhoLista()`
- `exibirInicioAoFim()`
- `exibirFimAoInicio()`

---

### **`index.ts`** — *Arquivo de Testes*

Utilizado para testar e demonstrar o funcionamento da lista.

Inclui testes como:

- Inserção no início, fim e posições específicas
- Remoção em todos os cenários
- Busca por valor e por posição
- Impressão da lista nos dois sentidos

---

## 🧪 Como Executar o Código

### ✔ Requisitos
- Node.js instalado  
- TypeScript instalado globalmente ou localmente  

---

### ✔ Passo a passo

#### 1. Instalar dependências:

npm install

#### 2. Compilar:

npx tsc

#### 3. Testar utilize o Parcel:

npm start

## 📑 Descrição Resumida da Classe Principal

A classe **ListaDuplamenteEncadeada** implementa uma estrutura totalmente dinâmica, permitindo:

- Inserção em qualquer posição  
- Remoção em qualquer posição  
- Navegação nos dois sentidos (**início → fim** | **fim → início**)  
- Busca por valor e por posição  
- Verificação se a lista está vazia  
- Consulta do tamanho atual da lista  

Tudo isso utilizando **nós duplamente encadeados**, sem uso de arrays ou estruturas prontas.

---

## 📝 Observações Finais

- Projeto implementado integralmente em **TypeScript**  
- Estrutura construída 100% com **ponteiros manuais**    
- Inclui arquivo de testes (`index.ts`) demonstrando o uso da estrutura  
