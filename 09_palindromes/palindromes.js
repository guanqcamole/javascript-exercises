const palindromes = function (string) {
    const str = formatString(string);
    
    let ptrStart = 0;
    let ptrEnd = str.length - 1;
    while (ptrStart < ptrEnd) {
        if (str.charAt(ptrStart) != str.charAt(ptrEnd)) {
            return false;
        }
        ptrStart++;
        ptrEnd--;
    }
    return true;
};

const formatString = (string) => {
    let str = '';
    for (const character of string) {
        if (/^[A-Za-z]$/.test(character)) 
         str += character.toLowerCase();
    }
    return str;
};

// Do not edit below this line
module.exports = palindromes;
