function reverseString(string) {
    
    const splitString = string.split('').reverse()
    const reversedString = splitString.join('')
    return reversedString
}

module.exports = reverseString;