import cipher from "./cipher";

test('takes a string and checks if letter has an object match', () => {
    expect(cipher('hello, there', 5)).toBe('hello, there',5)
})