module.exports = function toReadable(number) {
    const arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const arr2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    const arr3 = [' ', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let str = number.toString()
    let unit = str.charAt(str.length - 1);
    let dec = '';
    let hundreds = '';
    if (number > 9) {
        dec += str.charAt(str.length - 2);
    };
    if (number > 99) {
        hundreds += str.charAt(str.length - 3);
    };
    if (number == 0) {
        return arr1[0]
    };
    if (1 <= number && number <= 9) {
        return arr1[number];
    };
    if (10 <= number && number <= 19) {
        return arr2[unit];
    };
    if (20 <= number && number <= 99) {
        if (unit == 0) {
            return arr3[dec]
        }
        return arr3[dec] + ' ' + arr1[unit];
    };
    if (100 <= number && number <= 999) {
        if (dec == 0 && unit == 0) {
            return arr1[hundreds] + ' hundred'
        };
        if (unit == 0) {
            return arr1[hundreds] + ' hundred ' + arr3[dec]
        };
        if (dec < 1) {
            return arr1[hundreds] + ' hundred ' + arr1[unit]
        };
        if (dec < 2 && 0 < dec) {
            return arr1[hundreds] + ' hundred ' + arr2[unit]
        };
        return arr1[hundreds] + ' hundred ' + arr3[dec] + ' ' + arr1[unit]
    };
    if (number = 1000) {
        return 'one thousand'
    };

}