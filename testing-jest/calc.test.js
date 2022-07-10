import calculator, { add, divide, multiply, subtract } from "./calculator";

test('takes two numbers and adds to 4', () => {
    expect(add(2,2)).toBe(4)
})

test('takes two numbers and subtracts to equal 4', () => {
    expect(subtract(6,2)).toBe(4)
})

test('takes two numbers and divides to equal 4', () => {
    expect(divide(8,2)).toBe(4)
})

test('takes two numbers and multiplys to equal 10', () => {
    expect(multiply(5,2)).toBe(10)
})