Funções Utilitárias com Jest
Este repositório contém funções JavaScript para verificar palíndromos e realizar operações matemáticas básicas, bem como testes automatizados usando o framework de testes Jest.

Tabela de Conteúdos
Visão Geral
Instalação
Uso
Testes
Contribuição
Licença
Visão Geral
Este projeto inclui:

Função ePalindromo: Verifica se uma string é um palíndromo.
Funções Matemáticas: Implementações para soma, subtração, multiplicação e divisão.
Instalação
Para configurar o ambiente e instalar as dependências necessárias, siga estas etapas:

Clone o repositório:

bash
Copiar código
git clone https://github.com/SEU_USUARIO/nome-do-repositorio.git
cd nome-do-repositorio
Instale as dependências:

bash
Copiar código
npm install
Isso instalará o Jest e outras dependências necessárias para o projeto.

Uso
Função ePalindromo
A função ePalindromo está implementada no arquivo palindrome.js. Você pode usá-la da seguinte forma:

javascript
Copiar código
const ePalindromo = require('./palindrome');

const resultado1 = ePalindromo('arara'); // true
const resultado2 = ePalindromo('casa'); // false

console.log(resultado1); // true
console.log(resultado2); // false
Funções Matemáticas
As funções matemáticas estão implementadas no arquivo math.js. Você pode usá-las da seguinte forma:

javascript
Copiar código
const { soma, subtracao, multiplicacao, divisao } = require('./math');

console.log(soma(1, 2)); // 3
console.log(subtracao(5, 3)); // 2
console.log(multiplicacao(4, 3)); // 12
console.log(divisao(10, 2)); // 5
Testes
Para garantir que as funções estão funcionando corretamente, testes automatizados são fornecidos usando Jest.

Para rodar os testes, execute:

bash
Copiar código
npm test
Isso executará todos os testes definidos no diretório __tests__ e exibirá os resultados no terminal.

Testes incluídos:

Palíndromos: Verifica a função ePalindromo com diferentes casos.
Funções Matemáticas: Testa as funções soma, subtracao, multiplicacao, e divisao.
Contribuição
Contribuições são bem-vindas! Se você deseja contribuir para este projeto, por favor siga estas etapas:

Fork o repositório

Crie uma branch para sua nova funcionalidade:

bash
Copiar código
git checkout -b minha-nova-funcionalidade
Faça suas mudanças e commit:

bash
Copiar código
git commit -am 'Adiciona nova funcionalidade'
Push para a branch:

bash
Copiar código
git push origin minha-nova-funcionalidade
Abra um Pull Request

Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

Arquivos de Código
Aqui está uma breve descrição de cada arquivo do projeto:

palindrome.js
javascript
Copiar código
// palindrome.js

/**
 * Verifica se uma string é um palíndromo.
 * @param {string} str - A string a ser verificada.
 * @returns {boolean} - Retorna true se a string for um palíndromo, false caso contrário.
 */
function ePalindromo(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}

module.exports = ePalindromo;
math.js
javascript
Copiar código
// math.js

/**
 * Soma dois números.
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} - O resultado da soma.
 */
function soma(a, b) {
  return a + b;
}

/**
 * Subtrai dois números.
 * @param {number} a - O número de onde subtrair.
 * @param {number} b - O número a ser subtraído.
 * @returns {number} - O resultado da subtração.
 */
function subtracao(a, b) {
  return a - b;
}

/**
 * Multiplica dois números.
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} - O resultado da multiplicação.
 */
function multiplicacao(a, b) {
  return a * b;
}

/**
 * Divide dois números.
 * @param {number} a - O número a ser dividido.
 * @param {number} b - O divisor.
 * @returns {number} - O resultado da divisão.
 */
function divisao(a, b) {
  if (b === 0) throw new Error('Divisão por zero não permitida');
  return a / b;
}

module.exports = { soma, subtracao, multiplicacao, divisao };
__tests__/palindrome.test.js
javascript
Copiar código
// __tests__/palindrome.test.js

const ePalindromo = require('../palindrome');

test('deve retornar true para um palíndromo', () => {
  expect(ePalindromo('arara')).toBe(true);
});

test('deve retornar false para uma string não palindrômica', () => {
  expect(ePalindromo('casa')).toBe(false);
});

test('deve retornar true para uma string palindrômica com caracteres especiais', () => {
  expect(ePalindromo('A man, a plan, a canal, Panama')).toBe(true);
});

test('deve retornar true para uma string palindrômica com espaços', () => {
  expect(ePalindromo('Able was I ere I saw Elba')).toBe(true);
});

test('deve retornar true para uma string vazia', () => {
  expect(ePalindromo('')).toBe(true); // Uma string vazia é considerada um palíndromo
});
__tests__/math.test.js
javascript
Copiar código
// __tests__/math.test.js

const { soma, subtracao, multiplicacao, divisao } = require('../math');

test('deve retornar a soma de dois números', () => {
  expect(soma(1, 2)).toBe(3);
});

test('deve retornar a subtração de dois números', () => {
  expect(subtracao(5, 3)).toBe(2);
});

test('deve retornar a multiplicação de dois números', () => {
  expect(multiplicacao(4, 3)).toBe(12);
});

test('deve retornar a divisão de dois números', () => {
  expect(divisao(10, 2)).toBe(5);
});

test('deve lançar um erro ao tentar dividir por zero', () => {
  expect(() => divisao(10, 0)).toThrow('Divisão por zero não permitida');
});
