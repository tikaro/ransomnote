# Ransom Note

Given an arbitrary ransom note string and another string 
containing letters from all the magazines, write a function 
that will return true if the ransom note can be constructed 
from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

```js
canConstruct(stringToConstruct, magazineLetters)

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

## Requirements

Please `cd` into the directory before running all below commands.

Install dependencies:

```bash
$ npm install
```

## Making the test suite pass

Execute the tests with:

```bash
$ npm test
```