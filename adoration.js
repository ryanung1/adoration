function showHowMuchILoveYou (amount) {
    if (typeof amount == 'number' && Number.isInteger(amount) && amount > 0){ 
        return `I love you th${'i'.repeat(amount)}s much!`;
    } else {
        throw new Error("I'm really sorry: you're just not my type.")
    }
}

module.exports = {
    showHowMuchILoveYou
}