export const canConstruct = (stringToConstruct, magazineLetters) => {
  const wantedLetters     = stringToConstruct.split('');
  const availableLetters  = magazineLetters.split('');

  const noteIsPossible = wantedLetters.every((letter) => {
    const indexOfLetter = availableLetters.indexOf(letter);
    if (indexOfLetter > -1) {
      availableLetters.splice(indexOfLetter, 1);
      return true;
    }
  });

  return noteIsPossible;
}