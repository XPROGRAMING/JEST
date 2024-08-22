const sum = (a, b) => a + b
const subtracao = (c, d) => c - d
const multiplicacao = (e, f) => e * f
const divisao = (j , k) => j / k 

test('soma de 1 e 2 deve ser 3', () => {
    expect(sum(1, 2)).toBe(3);
})

test('subtracao de 2 e 1 deve ser 1', () => {
    expect(subtracao(2, 1)).toBe(1);
})

test('mutiplicaçao de 2 * 3 deve ser 6', () => {
    expect(multiplicacao(2, 3)).toBe(6);
})

test('divisao de 3/3 deve ser 1', () => {
    expect(divisao(3, 3)).toBe(1);
})