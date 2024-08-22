// palindrome.js

/**
 * Verifica se uma string é um palíndromo.
 * @param {string} str - A string a ser verificada.
 * @returns {boolean} - Retorna true se a string for um palíndromo, false caso contrário.
 */
function ePalindromo(str) {
    // Remove caracteres não alfanuméricos e converte para minúsculas
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Verifica se a string limpa é igual ao seu reverso
    return cleanStr === cleanStr.split('').reverse().join('');
}

module.exports = ePalindromo;
