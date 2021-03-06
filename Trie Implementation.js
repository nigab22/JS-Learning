/* Class representing a Trie data structure */
class Trie {
  constructor() {
    this.end = false;
    this.prefixes = 0;
    this.children = {};
  }

  insert(str, pos = 0) {
    if (str.length === pos) {
      this.end = true;
      return;
    }

    let key = [str[pos]];
    if (!this.children[key]) this.children[key] = new Trie();

    this.children[key].insert(str, pos + 1);
  }

  getAllWords(word = '', words = []) {
    if (this.end) words.push(word);

    for (let key in this.children) {
      this.children[key].getAllWords(word + key, words);
    }
    return words;
  }
}

// tests
const trie = new Trie();
trie.insert('cat');
trie.insert('dog');
trie.insert('calm');

console.log(trie);
console.log('**************************');
console.log(trie.getAllWords());
