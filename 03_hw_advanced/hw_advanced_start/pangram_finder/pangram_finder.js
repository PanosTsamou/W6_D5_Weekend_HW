const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every((char)=> Array.from(this.phrase.toLowerCase().split(/(?:_| )/).join("")).includes(char))
}

module.exports = PangramFinder;
