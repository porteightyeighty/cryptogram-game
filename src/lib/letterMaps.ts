const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

type LetterMap = { [key: string]: string }

export const createLetterMap = () => {
  const realLetters = [...letters]
  const encodedLetters = [...letters]
  const resultingMap: LetterMap = {}
  for (let i = 0; i < realLetters.length; i++) {
    const randomNum = Math.floor(Math.random() * (26 - i))

    resultingMap[realLetters[i]] = encodedLetters[randomNum]
    encodedLetters.splice(randomNum, 1)
  }
  return resultingMap
}

export const createEmptyLetterMap = () => {
  const resultingMap: LetterMap = {}
  for (const l of letters) {
    resultingMap[l] = ''
  }

  return resultingMap
}