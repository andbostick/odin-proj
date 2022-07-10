import capitalize from "./capitalize";

test('takes a string and returns with the first letter capitalized', () => {
    expect(capitalize('yes')).toBe('Yes')
})