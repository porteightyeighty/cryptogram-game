<template>
  <div>
    <div id="puzzle" class="flex space-x-2">
      <LetterTile
        @change-guess="handleChangeGuess"
        v-for="n in answer.length"
        :key="n"
        :clue="isCharacterAlphabetical(answer[n - 1]) ? answerKey[answer[n - 1]] : answer[n - 1]"
        :alphabetical="isCharacterAlphabetical(answer[n - 1])"
        :guess="guessKey[answerKey[answer[n - 1]]]"
      />
    </div>

    <div
      id="letterbox"
      class="w-60 flex flex-wrap justify-center border-2 border-border bg-background"
    >
      <div
        v-for="(value, key) in guessKey"
        :key="key"
        class="p-2"
        :class="
          guessCount[key as string] > 1
            ? 'text-error font-bold underline'
            : guessCount[key as string] > 0
              ? 'text-copy'
              : 'text-primary'
        "
      >
        {{ key }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import LetterTile from './LetterTile.vue'
import {
  createLetterMap,
  createEmptyLetterMap,
  createEmptyLetterCount,
  letters
} from '../lib/letterMaps'
defineProps<{
  answer: string
}>()

const isCharacterAlphabetical = (char: string) => {
  return letters.findIndex((letter) => letter === char) > -1
}

const answerKey = createLetterMap()
const guessKey = ref(createEmptyLetterMap())

const guessCount = computed(() => {
  const guessCount = createEmptyLetterCount()
  for (const key in guessKey.value) {
    if (guessKey.value[key] !== '' && guessKey.value[key] in guessCount) {
      guessCount[guessKey.value[key]]++
    }
  }
  return guessCount
})
const handleChangeGuess = ([clue, data]) => {
  guessKey.value[clue] = data ?? ''
}
// const lettersRemaining = ref({
//   A: true,
//   B: true,
//   C: true,
//   D: true,
//   E: true,
//   F: true,
//   G: true,
//   H: true,
//   I: true,
//   J: true,
//   K: true,
//   L: true,
//   M: true,
//   N: true,
//   O: true,
//   P: true,
//   Q: true,
//   R: true,
//   S: true,
//   T: true,
//   U: true,
//   V: true,
//   W: true,
//   X: true,
//   Y: true,
//   Z: true
// })
</script>
