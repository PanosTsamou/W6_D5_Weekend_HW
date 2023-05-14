const AnagramFinder = function (word) {
    this.word = word.toLowerCase()
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {

    const results = otherWords.filter((element) =>{
        return element.length === this.word.length && element !== this.word && Array.from(element.toLowerCase()).every((char) =>  Array.from(this.word).includes(char))
    }) 
    return results  
        
};

module.exports = AnagramFinder;
