
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

test('deve retornar false para uma string vazia', () => {
  expect(ePalindromo('')).toBe(true); 
});
