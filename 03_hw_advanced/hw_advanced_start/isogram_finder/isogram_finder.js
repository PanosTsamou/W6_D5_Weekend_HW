const IsogramFinder = function (word) {
    this.word = word
}

IsogramFinder.prototype.isIsogram = function () {
 return Array.from(this.word.toLowerCase()).every((char, index , array) => {
    let counter = 0
    array.forEach((element) =>{
        if(element === char){
            counter += 1
        }
    })
    return counter === 1
 })
}

module.exports = IsogramFinder;
